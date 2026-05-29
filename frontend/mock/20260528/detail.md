# 고도화 구현 상세 (Implementation Detail)

본 문서는 실제 To Do 앱 리팩토링 과정에서 적용된 핵심 코드 구조와 패턴을 설명합니다.

## 1. 동적 옵션을 포함한 계층적 데이터 구조

내비게이션 아이템과 해당 화면에서 사용될 옵션을 결합하여 데이터의 응집도를 높였습니다.

```typescript
// features/todo/types/web-sidebar-options.ts
export const navItems = [
  { 
    label: '오늘 할 일', 
    icon: Sun, 
    headerOptions: [
      { label: '완료된 작업 표시', icon: CheckCircle2 },
      { label: '목록 인쇄', icon: Printer }
    ],
    sortOptions: [
      { label: '중요도', icon: Star },
      { label: '기한', icon: Calendar }
    ]
  },
  // ... 기타 아이템
]
```

## 2. 공통 드롭다운 컴포넌트 (`TodoDropdown`)

반복되는 UI 패턴을 추상화하여 유지보수성을 극대화했습니다.

```tsx
// features/todo/components/todo-dropdown.tsx
export function TodoDropdown({ trigger, title, items, align = 'center' }: TodoDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem className="justify-center font-bold">{title}</DropdownMenuItem>
        <DropdownMenuSeparator />
        {items.map((item, idx) => (
          <Fragment key={idx}>
            {item.separatorBefore && <DropdownMenuSeparator />}
            <DropdownMenuItem variant={item.variant}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## 3. 전역 상태 연동 로직 (`MainContent`)

현재 활성화된 내비게이션에 따라 화면 구성을 동적으로 렌더링합니다.

```tsx
// features/todo/components/main-content.tsx
export function MainContent() {
  const { activeNavLabel } = useTodo();

  // 활성화된 내비게이션 아이템 검색 및 데이터 추출
  const activeNavItem = [...navItems, ...listItems].find(item => item.label === activeNavLabel);
  const headerOptions = activeNavItem?.headerOptions || [];
  const ActiveIcon = activeNavItem?.icon || Sun;

  return (
    <main>
      <ActiveIcon />
      <h1>{activeNavLabel}</h1>
      <TodoDropdown title="옵션" items={headerOptions} trigger={<button>...</button>} />
    </main>
  );
}
```

## 4. 실시간 상태 업데이트 (`WebSidebar`)

사용자 클릭에 반응하여 전역 상태를 업데이트합니다.

```tsx
// features/todo/components/web-sidebar.tsx
<SidebarMenuButton 
  isActive={activeNavLabel === item.label}
  onClick={() => setActiveNavLabel(item.label)}
>
  <item.icon />
  <span>{item.label}</span>
</SidebarMenuButton>
```
