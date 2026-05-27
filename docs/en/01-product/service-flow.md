# Service Flow

## Main User Flow

```text
1. User signs up or logs in.
2. The app opens the main task screen.
3. If the user has tasks for today, the app shows today's task list.
4. If the user has no tasks for today, the app shows a quick-capture empty
   state.
5. User adds a task through quick add or the detail panel.
6. User optionally sets date, priority, list, tags, repeat, and memo.
7. User reviews tasks in list, calendar, or board view.
8. User completes tasks or moves them through board status columns.
9. User searches or filters tasks when the list grows.
10. User recovers completed or deleted tasks when needed.
```

## Task Creation Flow

```text
Quick-add input or detail panel
  -> Task validation
  -> Account-based task storage
  -> Updated list/calendar/board view
```

## Completion And Trash Flow

```text
Task
  -> Complete or delete action
  -> Same-day completed state or trash state
  -> Undo, restore, or permanent delete
  -> Updated default view
```
