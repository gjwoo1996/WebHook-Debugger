# Microsoft To Do 데스크톱 스타일 (todo-app) 구현 고도화 리포트

`todo-web.png`의 디자인을 기반으로 초기 구현된 To Do 앱을 분석하고, 서비스의 완성도를 높이기 위한 아키텍처 개선 및 추가 기능 구현 계획을 정리했습니다.

## 1. 고도화된 폴더 구조 (Planned Folder Tree)

기존 구조에서 컴포넌트의 책임을 분리하고, 전역 상태 관리 및 도메인 로직을 체계화하기 위해 확장된 구조입니다. (추가 예정 파일 포함)

```text
frontend/
├── app/
│   └── (default-layout)/
│      └── (web)/
│          ├── layout.tsx         # 전역 Provider 및 기본 레이아웃 구성
│          └── page.tsx           # 메인 뷰 진입점
├── features/
│   └── todo/
│       ├── components/           # 컴포넌트 단위 분리
│       │   ├── web-sidebar/      # [좌측] 검색 및 카테고리 네비게이션
│       │   ├── main-content/     # [중앙] 배경 및 작업 관리 영역
│       │   │   ├── task-list.tsx      # (New) 작업 카드 리스트 래퍼
│       │   │   ├── task-item.tsx      # (New) 개별 작업 항목 (DnD 적용 대상)
│       │   │   └── floating-input.tsx  # (New) 하단 작업 추가 플로팅 바
│       │   └── task-detail/      # [우측] 작업 상세 정보 사이드바
│       │       ├── step-list.tsx      # (New) 하위 단계 관리 목록
│       │       ├── reminder-picker.tsx # (New) 기한 및 알림 설정 컴포넌트
│       │       └── memo-editor.tsx    # (New) 서식 없는 메모 입력 영역
│       ├── hooks/                # 도메인 로직 훅
│       │   ├── use-todo-actions.ts    # (New) CRUD 인터페이스 정의
│       │   └── use-filtered-todos.ts  # (New) 사이드바 필터에 따른 목록 반환
│       ├── store/                # 전역 상태 관리 (Zustand)
│       │   └── use-todo-store.ts      # (New) UI 상태 및 데이터 캐시 저장소
│       └── types/
│           └── todo.d.ts              # 도메인 모델 타입 정의
└── mock/
    └── 20260528
       ├── requirement.md              # 본 고도화 리포트 (Main)
       └── implementation-detail.md    # (New) 상세 구현 가이드 및 코드 스니핏
```

## 2. 주요 개선 사항 (Refinement)

### 2.1 컴포넌트 원자화 (Atomic Refactoring)
- **MainContent 분리**: 현재 비대한 `MainContent` 컴포넌트를 `TaskList`, `TaskItem`, `FloatingInput`으로 쪼개어 가독성을 높이고, 특정 아이템 변경 시 전체 리스트가 리렌더링되지 않도록 최적화합니다.
- **TaskDetail 모듈화**: 상세 페이지 내의 복잡한 입력 폼(단계, 메모, 날짜 선택 등)을 개별 컴포넌트로 분리하여 관리 효율성을 증대합니다.

### 2.2 전역 상태 관리 모델 전환
- **Context API -> Zustand**: `TodoContext`는 설정이 복잡하고 리렌더링 제어가 어려우므로, 가볍고 직관적인 `Zustand`로 전환하여 전역 UI 상태(사이드바 개폐, 선택된 ID)와 도메인 데이터(Todo List)를 관리합니다.

### 2.3 UX 인터랙션 고도화
- **작업 추가 경험**: 플로팅 바 클릭 시 나타나는 하단 옵션들(날짜, 알림 등)을 애니메이션과 함께 자연스럽게 노출합니다.
- **실시간 저장**: 상세 페이지의 정보 수정 시 별도의 '저장' 버튼 없이 `onBlur` 또는 디바운싱된 `onChange`를 통해 서버(또는 스토어)에 즉시 반영합니다.

## 3. 향후 추가 구현 기능

### 3.1 스마트 필터 및 검색
- **동적 필터링**: '오늘 할 일', '중요', '계획된 일정' 등 카테고리별로 목록을 동적으로 필터링하는 기능을 구현합니다.
- **전역 검색**: 제목 및 메모 내용을 기반으로 한 실시간 검색 기능을 추가합니다.

### 3.2 드래그 앤 드롭 (DnD)
- **순서 변경**: `@hello-pangea/dnd`를 활용하여 작업의 우선순위를 드래그로 조정하는 기능을 구현합니다.

### 3.3 백엔드 연동 및 캐싱
- **React Query**: `Axios`와 `React Query`를 결합하여 서버 상태를 관리하고, 낙관적 업데이트(Optimistic Updates)를 통해 네트워크 지연 없는 사용자 경험을 제공합니다.

---

**상세한 구현 방법과 변경될 코드 구조는 [implementation-detail.md](./implementation-detail.md)에서 확인하실 수 있습니다.**
