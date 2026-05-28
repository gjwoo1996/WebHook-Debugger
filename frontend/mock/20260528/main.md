# Microsoft To Do 데스크톱 스타일 (todo-app) 고도화 구현 리포트

`mock/20260528/requirement.md`를 기반으로, 초기 구현된 To Do 앱의 구조적 한계를 극복하고 확장성 있는 아키텍처로의 전환을 위한 고도화 작업을 진행했습니다.

## 1. 폴더 구조 개선 (Refined Folder Tree)

```text
frontend/
├── features/
│   └── todo/
│       ├── components/
│       │   ├── web-sidebar/
│       │   ├── main-content/
│       │   └── task-detail/
│       ├── store/
│       │   └── use-todo-store.ts
│       ├── types/
│       │   └── todo.ts
│       └── hooks/
│           └── use-todo-actions.ts
└── mock/
    └── 20260528/
        ├── main.md
        └── detail.md
```

## 2. 주요 개선 사항

### 2.1 아키텍처: Context API -> Zustand 전환
- 성능 최적화 및 상태 로직 통합.

### 2.2 컴포넌트: 비대한 MainContent의 원자화
- TaskList, TaskItem, FloatingInput 등으로 분리.

### 2.3 UX: 인터랙션 강화
- 플로팅 입력창 및 실시간 동기화 적용.
