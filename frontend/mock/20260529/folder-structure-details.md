# 고도화된 폴더 구조 및 구현 진행 가이드 (2026-05-29)

`@mock/20260528/requirement.md`에서 설계된 "고도화된 폴더 구조"를 기반으로 각 영역별 구현 계획과 핵심 스니핏을 정리했습니다.

## 1. 전역 상태 관리 및 도메인 모델 (Store & Types)

기존 `TodoContext`를 `Zustand`로 전환하여 UI 상태와 데이터를 분리하고, 도메인 타입을 명확히 정의합니다.

### 1.1 Zustand 스토어 구조 (`features/todo/store/use-todo-store.ts`)
```typescript
import { create } from 'zustand';

interface TodoState {
  // UI 상태 관리
  selectedTaskId: string | null;
  filterType: 'all' | 'today' | 'important' | 'planned';
  searchQuery: string;

  // 도메인 데이터
  todos: any[]; // TODO: Todo 타입 정의 후 교체

  // 액션
  setSelectedTaskId: (id: string | null) => void;
  addTodo: (title: string) => void;
  updateTodo: (id: string, updates: any) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  selectedTaskId: null,
  filterType: 'all',
  searchQuery: '',
  todos: [],
  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  addTodo: (title) => set((state) => ({
    todos: [...state.todos, { id: Date.now().toString(), title, completed: false }]
  })),
  // ... 기타 액션
}));
```

## 2. 컴포넌트 단위 분리 (Atomic Refactoring)

`MainContent`를 레이아웃, 리스트, 입력창으로 쪼개어 가독성과 렌더링 성능을 최적화합니다.

### 2.1 하단 플로팅 입력 바 (`features/todo/components/main-content/floating-input.tsx`)
디자인 시안(`todo-web.png`)의 하단 입력 기능을 독립 컴포넌트로 구현하며, 포커스 여부에 따라 UI가 확장되도록 설계합니다.
```tsx
export const FloatingInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`bg-white/90 backdrop-blur rounded-lg shadow-lg transition-all ${isFocused ? 'h-32' : 'h-12'}`}>
      <input 
        placeholder="작업 추가" 
        onFocus={() => setIsFocused(true)}
        className="w-full h-12 px-4 bg-transparent outline-none"
      />
      {isFocused && (
        <div className="flex justify-between p-2 border-t">
          <div className="flex gap-2"> {/* 아이콘들 */} </div>
          <button className="bg-[#2564cf] text-white px-3 py-1 rounded">추가</button>
        </div>
      )}
    </div>
  );
};
```

### 2.2 작업 상세 정보 사이드바 (`features/todo/components/task-detail/`)
상세 정보창 내의 메모, 단계(Steps) 등을 개별 섹션으로 분리합니다.
```tsx
// features/todo/components/task-detail/memo-section.tsx
export const MemoSection = ({ taskId }: { taskId: string }) => {
  // onBlur 시 자동 저장 로직 적용
  return (
    <textarea 
      placeholder="메모 추가"
      className="w-full p-4 bg-slate-50 min-h-[200px] outline-none"
    />
  );
};
```

## 3. 구현 프로세스 요약

1.  **폴더 구조 생성:** `features/todo/` 하위에 `components/main-content`, `components/task-detail`, `store` 디렉토리를 생성합니다.
2.  **스토어 정의:** `useTodoStore.ts`를 작성하여 중앙 집중식 상태 관리를 시작합니다.
3.  **컴포넌트 이관:** 기존 `MainContent.tsx`의 로직을 새 컴포넌트들로 점진적으로 이관합니다.
4.  **UX 최적화:** `Framer Motion`을 활용한 사이드바 슬라이딩 및 `React Query`를 통한 낙관적 업데이트를 적용합니다.

이 구조는 코드의 재사용성을 높이고, 대규모 할 일 목록에서도 부드러운 사용자 경험을 제공하는 것을 목표로 합니다.
