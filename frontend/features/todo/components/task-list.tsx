import {
  Circle,
  Star,
  Calendar,
  Repeat,
  Paperclip,
  StickyNote,
} from 'lucide-react'
import { useTodo } from '@/features/todo/context/todo-context'
import { useTodoLists } from '@/features/todo/hooks/todo.hooks'
import { cn } from '@/shared/lib/utils'

const data = [
  {
    id: 4,
    title: '테스트4',
    date: '6월 1일, 월까지',
    subtext: '작업',
    important: true,
    completed: false,
    repeat: true,
    memo: null,
  },
  {
    id: 1,
    title: '테스트1',
    date: '내일',
    subtext: '작업',
    important: true,
    completed: false,
    attachment: true,
    memo: null,
  },
  {
    id: 2,
    title: '테스트2',
    date: '오늘',
    subtext: '작업 . 0/1',
    important: true,
    completed: false,
    attachment: true,
    memo: '테스트22',
  },
]

export function TaskList() {
  const { selectedTaskId, setSelectedTaskId, activeNavLabel } = useTodo()

  // TODO: 삭제 금지 - 추후 추가 예정
  // const { data } = useTodoLists()

  return (
    <div className="flex flex-col gap-1">
      {data.map(task => (
        <div
          key={task.id}
          className={cn(
            'flex cursor-pointer items-center gap-4 rounded-md border border-gray-100 bg-white p-4 shadow-sm transition-all hover:bg-gray-50',
            selectedTaskId === task.id &&
              'bg-blue-50/50 ring-1 ring-[#2564cf]/20'
          )}
          onClick={e => {
            e.stopPropagation()
            setSelectedTaskId(task.id)
          }}
        >
          <Circle className="h-5 w-5 shrink-0 text-gray-400 hover:text-[#2564cf]" />
          <div className="flex min-w-0 flex-1 flex-col">
            <span
              className={cn(
                'text-sm font-medium',
                selectedTaskId === task.id ? 'text-[#2564cf]' : 'text-gray-900'
              )}
            >
              {task.title}
            </span>
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              <span>{task.subtext}</span>
              {task.date && (
                <div className="flex items-center gap-1">
                  <span className="mx-0.5 h-0.5 w-0.5 rounded-full bg-gray-400" />
                  <Calendar className="h-3 w-3" />
                  <span
                    className={task.date === '오늘' ? 'text-[#2564cf]' : ''}
                  >
                    {task.date}
                  </span>
                </div>
              )}
              {task.repeat && (
                <div className="flex items-center gap-1">
                  <span className="mx-0.5 h-0.5 w-0.5 rounded-full bg-gray-400" />
                  <Repeat className="h-3 w-3" />
                </div>
              )}
              {task.attachment && (
                <div className="flex items-center gap-1">
                  <span className="mx-0.5 h-0.5 w-0.5 rounded-full bg-gray-400" />
                  <Paperclip className="h-3 w-3 rotate-45" />
                  <span>첨부된 파일</span>
                </div>
              )}
              {task.memo && (
                <div className="flex items-center gap-1">
                  <span className="mx-0.5 h-0.5 w-0.5 rounded-full bg-gray-400" />
                  <StickyNote className="h-3 w-3" />
                </div>
              )}
            </div>
          </div>
          <Star
            className={cn(
              'h-4 w-4 shrink-0',
              task.important
                ? 'text-[#2564cf]'
                : 'text-gray-300 hover:text-gray-400'
            )}
          />
        </div>
      ))}
    </div>
  )
}
