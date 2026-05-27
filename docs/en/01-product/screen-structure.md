# Screen Structure

## Overview

The MVP is organized around a desktop web experience. Mobile-only screens are
outside the first scope.

The first screen after login adapts to the user's current state:

- If there are tasks for today, the app shows the today's task list first.
- If there are no tasks for today, the app shows a stronger quick-capture empty
  state with template options.

## Login And Signup

- Provide email/password login.
- Provide social login as a fast entry option.
- Keep the login screen simple.
- Move users to the main task screen after login.
- After account creation, show the quick-capture state if there are no tasks for
  today.

## Main Task Screen

- Use the list view as the default entry point.
- Place primary filters in a collapsible left sidebar.
- Show Today, Upcoming, and All directly.
- Keep lists, tags, completed tasks, and trash under collapsed groups or a More
  area.
- Place the view switch at the top with List, Calendar, and Board buttons.
- Place the quick-add input below the task list when tasks exist.
- Make the quick-add input more prominent when today's list is empty.
- Task rows show checkbox, title, date, and priority.
- Clicking the checkbox completes the task.
- Clicking the title or row opens the detail panel.

## Task Detail Panel

- Open task details in a right-side panel on desktop.
- Reuse the same panel for creating a detailed new task.
- Preserve the user's list position when the panel closes.
- Save changes with a button at the bottom of the panel.
- Warn before closing when there are unsaved changes.
- Put delete inside the panel's More menu.
- Move deleted tasks to trash and show an undo message.

Detail fields are ordered as:

1. Title
2. Date
3. Priority
4. List
5. Tags
6. Repeat
7. Memo

## Search Modal

- Place the search button in the left sidebar.
- Open search as a centered modal.
- Search task titles and memos.
- Show recent screens.
- Selecting a result moves to the relevant view and opens the task detail panel.
- Fast command navigation is outside the MVP.

## Calendar View

- Provide monthly and weekly calendar views.
- Place the monthly/weekly switch in the top-right corner of the calendar.
- Show only tasks that have dates.
- Keep undated tasks accessible through the list view and sidebar filters.
- Show one task directly in each day cell.
- Use a `+N` indicator when more tasks exist on the same date.
- Selecting a task opens the right-side detail panel.

## Board View

- Use To Do, In Progress, and Done as the default columns.
- Treat the board as a status view, not a priority or list view.
- Show board items only within the currently selected sidebar filter.
- Support drag-and-drop status changes.
- Also expose status in the detail panel for users who do not use drag and drop.
- Board cards show title, date, and priority.
- Tags stay in the detail panel by default.

## Completed And Trash

- Use one Archive screen with Completed and Trash tabs.
- Open Archive from the sidebar More area.
- Make Completed the default tab.
- Allow users to undo completion from the Completed tab.
- Allow users to restore or permanently delete tasks from the Trash tab.
