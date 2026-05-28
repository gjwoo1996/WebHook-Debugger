# 고도화 구현 상세 (Implementation Detail)

## 1. Zustand 스토어 구조

```typescript
// features/todo/store/use-todo-store.ts
export const useTodoStore = create<TodoState>((set) => ({
  selectedTaskId: null,
  todos: [],
  addTodo: (title) => set((state) => ({
    todos: [...state.todos, { id: crypto.randomUUID(), title, completed: false }]
  })),
  // ... 생략
}));
```

## 2. 컴포넌트 분리 (MainContent)

### 2.1 FloatingInput
```tsx
export const FloatingInput = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div className={cn("transition-all", isAdding ? "h-32" : "h-14")}>
      <input onFocus={() => setIsAdding(true)} />
      {isAdding && <div className="mt-4">옵션들...</div>}
    </div>
  );
};
```

## 3. 실시간 동기화 패턴
`onBlur` 이벤트를 사용하여 상태를 업데이트합니다.
```tsx
<textarea onBlur={(e) => updateTodo(id, { memo: e.target.value })} />
```
