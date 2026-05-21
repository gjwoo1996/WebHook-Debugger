# Microsoft To Do 데스크톱 스타일 (todo-app) 구현 리포트

`todo-web.png`의 디자인을 바탕으로, 배경 이미지가 포함된 데스크톱 앱 스타일의 To Do 인터페이스를 구현했습니다.

## 1. 폴더 구조 (Folder Tree)

```text
frontend/
├── app/
│   └── todo/
│       └── page.tsx              # To Do 메인 페이지
├── features/
│   └── todo-app/                 # To Do 기능 관련 컴포넌트
│       └── components/
│           ├── app-sidebar.tsx    # 왼쪽 사이드바 (프로필, 검색, 메뉴)
│           ├── app-main-content.tsx # 중앙 영역 (배경, 작업 리스트, 플로팅 입력창)
│           ├── app-task-detail.tsx  # 오른쪽 상세 사이드바 (단계, 메모, 파일)
│           └── todo-app-shell.tsx  # 전체 레이아웃 셸
└── mock/
    └── implementation.md         # 본 구현 리포트
```

## 2. 주요 구현 내용 (Key Implementation)

### 2.1 시각적 요소
- **배경 이미지**: `AppMainContent`에 Unsplash의 고해상도 도시 이미지를 적용하고 `backdrop-blur`와 투명도를 조절하여 깊이감을 주었습니다.
- **플로팅 입력창**: 중앙 영역 하단에 떠 있는 듯한(Floating) 입력 바를 배치하여 현대적인 느낌을 구현했습니다.
- **사이드바 디자인**: 프로필 영역과 검색창, 카테고리 리스트를 `todo-web.png`와 최대한 유사하게 배치했습니다.

### 2.2 컴포넌트 상세 (Table)

| 컴포넌트명 | 역할 | 주요 특징 |
| :--- | :--- | :--- |
| `AppSidebar` | 네비게이션 | 프로필 정보, 검색창, 스마트 리스트(오늘 할 일 등), 사용자 목록 관리 |
| `AppMainContent` | 메인 작업 영역 | 배경 이미지, 리스트 헤더, 작업 카드 목록, 플로팅 작업 추가 바 |
| `AppTaskDetail` | 작업 상세 정보 | 단계 추가(Next Steps), 알림/기한 설정, 파일 첨부(이미지 미리보기), 메모 |
| `TodoAppShell` | 레이아웃 프레임 | 사이드바와 메인 영역을 결합하는 최상위 컨테이너 |

## 3. 코드 스니핏 (Code Snippet)

### AppMainContent의 배경 및 플로팅 바 구조
```tsx
// features/todo-app/components/app-main-content.tsx
<main className="relative flex flex-1 flex-col overflow-hidden">
  {/* 배경 이미지 레이어 */}
  <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url(...)" }}>
    <div className="absolute inset-0 bg-black/10" />
  </div>

  <div className="relative z-10 flex flex-1 flex-col p-6">
    {/* 헤더 및 작업 리스트 영역 */}
    ...
    {/* 하단 플로팅 입력창 */}
    <div className="mt-auto pt-6">
      <div className="flex items-center gap-4 rounded-md bg-white/90 p-4 shadow-lg backdrop-blur-md">
        <Plus className="h-5 w-5 text-[#2564cf]" />
        <Input placeholder="작업 추가" className="..." />
      </div>
    </div>
  </div>
</main>
```

## 4. 보완 필요 및 향후 계획

- [ ] **상태 관리**: 현재 Mock 데이터로 표시되는 내용을 `useState`나 `React Query`를 사용하여 실제 인터랙션이 가능하도록 연동.
- [ ] **배경 변경 기능**: 사용자가 원하는 배경 이미지를 선택하거나 업로드할 수 있는 기능 추가.
- [ ] **반응형 최적화**: 화면 크기에 따라 사이드바가 접히거나 작업 리스트의 레이아웃이 유연하게 변하도록 개선.
- [ ] **파일 업로드**: `AppTaskDetail`의 파일 추가 버튼 클릭 시 실제 파일 업로드 로직 구현.
