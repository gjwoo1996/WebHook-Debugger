# To Do 앱 구현 상세 가이드 (Implementation Detail)

본 문서는 `requirement.md`에서 정의한 고도화 계획을 실현하기 위한 구체적인 코드 구조와 구현 전략을 설명합니다.

## 1. 전역 상태 관리 (Zustand)

`TodoContext`를 대체할 Zustand 스토어 구조입니다. UI 상태와 도메인 데이터를 명확히 분리합니다.

```typescript
// features/todo/store/use-todo-store.ts
import { create } from 'zustand';
import { Todo } from '../types/todo';

interface TodoState {
  // UI State
  selectedTaskId: string | null;
  isSidebarOpen: boolean;
  filterType: 'all' | 'today' | 'important' | 'planned';
  searchQuery: string;

  // Domain Data (Initial Mock or Cache)
  todos: Todo[];

  // Actions
  setSelectedTaskId: (id: string | null) => void;
  setFilterType: (type: TodoState['filterType']) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  selectedTaskId: null,
  isSidebarOpen: true,
  filterType: 'all',
  searchQuery: '',
  todos: [], // 초기 데이터

  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setFilterType: (type) => set({ filterType: type }),
  addTodo: (title) => set((state) => ({
    todos: [...state.todos, { id: Date.now().toString(), title, completed: false, important: false }]
  })),
  // ... 기타 액션 구현
}));
```

## 2. 컴포넌트 리팩토링 (Component Split)

### 2.1 MainContent 구조 변경
비대한 `MainContent`를 책임별로 분리하여 재사용성과 성능을 확보합니다.

```tsx
// features/todo/components/main-content/index.tsx
export const MainContent = () => {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/bg-todo.jpg)' }}>
      <header className="p-6 text-white">
        <h1 className="text-2xl font-bold">오늘 할 일</h1>
      </header>
      
      {/* 작업 목록 영역 */}
      <TaskList />

      {/* 하단 플로팅 입력 바 */}
      <FloatingInput />
    </main>
  );
};
```

### 2.2 FloatingInput (작업 추가 바)
디자인 시안(`todo-web.png`)의 하단 입력창 기능을 독립된 컴포넌트로 구현합니다.

```tsx
// features/todo/components/main-content/floating-input.tsx
export const FloatingInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const addTodo = useTodoStore((state) => state.addTodo);

  return (
    <div className="absolute bottom-6 left-6 right-6">
      <div className={`bg-white/90 backdrop-blur rounded-lg shadow-lg transition-all ${isFocused ? 'h-32' : 'h-12'}`}>
        <input 
          placeholder="작업 추가" 
          onFocus={() => setIsFocused(true)}
          className="w-full h-12 px-4 bg-transparent outline-none"
        />
        {isFocused && (
          <div className="flex justify-between p-2 border-t">
            <div className="flex gap-2">
              <CalendarIcon className="w-5 h-5" />
              <BellIcon className="w-5 h-5" />
            </div>
            <Button onClick={() => { /* 추가 로직 */ setIsFocused(false); }}>추가</Button>
          </div>
        )}
      </div>
    </div>
  );
};
```

## 3. 상세 페이지 고도화 (Task Detail)

React Hook Form을 사용하여 입력 필드의 상태를 관리하고, 변경 시 즉시 저장(Sync)하는 패턴을 적용합니다.

```tsx
// features/todo/components/task-detail/memo-section.tsx
export const MemoSection = ({ taskId }: { taskId: string }) => {
  const todo = useTodoStore((state) => state.todos.find(t => t.id === taskId));
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const { register, handleSubmit } = useForm({
    defaultValues: { memo: todo?.memo || '' }
  });

  const onBlur = handleSubmit((data) => {
    updateTodo(taskId, { memo: data.memo });
  });

  return (
    <textarea 
      {...register('memo')} 
      onBlur={onBlur}
      placeholder="메모 추가"
      className="w-full p-4 bg-slate-50 min-h-[200px] outline-none"
    />
  );
};
```

## 4. 데이터 흐름 및 성능 최적화

1.  **Selector 기반 구독**: `useTodoStore(state => state.todos)` 대신 `useTodoStore(state => state.selectedTaskId)` 처럼 필요한 상태만 구독하여 불필요한 리렌더링을 방지합니다.
2.  **React Query 연동**: 실제 API 연동 시 `useTodoStore`의 데이터를 `initialData`로 활용하거나, 서버 상태는 React Query로, UI 상태는 Zustand로 분리하여 관리합니다.
3.  **애니메이션**: `Framer Motion`을 사용하여 상세 사이드바의 슬라이딩 효과와 입력창의 확장 효과를 부드럽게 구현합니다.
