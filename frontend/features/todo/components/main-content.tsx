'use client'

import {
  Plus,
  LayoutGrid,
  List,
  ArrowUpDown,
  Users,
  Lightbulb,
  MoreHorizontal,
  Circle,
  Star,
  Calendar,
  Bell,
  Repeat,
  Paperclip,
  CheckCircle2,
  Info,
  Menu,
  Printer,
  Tag,
  CalendarArrowUp,
  CalendarPlus,
  CalendarPlus2,
  CalendarClock,
  ClockArrowDown,
  ClockPlus,
  RotateCwSquare,
  Trash2,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/shared/lib/utils'
import { useRef, useEffect, useState } from 'react'
import { useTodo } from '@/features/todo/context/todo-context'
import { useSidebar } from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useTodoLists } from '@/features/todo/hooks/todo.hooks'

const tasks = [
  {
    id: 4,
    title: '테스트4',
    date: '6월 1일, 월까지',
    subtext: '작업',
    important: true,
    completed: false,
    repeat: true,
  },
  {
    id: 1,
    title: '테스트1',
    date: '내일',
    subtext: '작업',
    important: true,
    completed: false,
    attachment: true,
  },
  {
    id: 2,
    title: '테스트2',
    date: '오늘',
    subtext: '작업 . 0/1',
    important: true,
    completed: false,
    attachment: true,
  },
]

export function MainContent() {
  const { selectedTaskId, setSelectedTaskId } = useTodo()
  const [isAddingTask, setIsAddingTask] = useState(false)
  const addTaskRef = useRef<HTMLDivElement>(null)
  const { state, toggleSidebar } = useSidebar()

  // const { data } = useTodoLists()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        addTaskRef.current &&
        !addTaskRef.current.contains(event.target as Node)
      ) {
        setIsAddingTask(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            {state === 'collapsed' ? (
              <button
                onClick={toggleSidebar}
                className="mt-1 rounded p-1 hover:bg-gray-100"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
            ) : (
              <div className="mt-1">
                <Sun className="h-6 w-6 text-[#2564cf]" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">오늘 할 일</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    {/* <Button variant="outline">Open</Button> */}
                    <button className="rounded p-1 hover:bg-gray-200">
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-56 text-gray-800"
                  >
                    <DropdownMenuItem className="justify-center font-bold text-gray-700">
                      옵션
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <CheckCircle2 />
                      완료된 작업 표시
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Printer />
                      목록 인쇄
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <p className="ml-1 text-xs text-gray-500">5월 26일, 화요일</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-md bg-gray-200/50 p-1">
            <button className="flex items-center gap-2 rounded bg-white px-3 py-1 text-xs font-medium shadow-sm">
              <LayoutGrid className="h-3.5 w-3.5 text-gray-600" />
              그리드
            </button>
            <button className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200">
              <List className="h-3.5 w-3.5" />
              목록
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-[#2564cf]">
                  <ArrowUpDown className="h-3.5 w-3.5" /> 정렬
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-56 text-gray-800"
              >
                <DropdownMenuItem className="justify-center font-bold text-gray-700">
                  정렬 기준
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Star />
                  중요도
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar />
                  기한
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowUpDown />
                  제목
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarPlus />
                  만든 날짜
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-[#2564cf]">
                  <Users className="h-3.5 w-3.5" /> 그룹
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-56 text-gray-800"
              >
                <DropdownMenuItem className="justify-center font-bold text-gray-700">
                  다음을 기준으로 그룹화
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Tag />
                  범주
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="flex items-center gap-1 hover:text-[#2564cf]">
              <Lightbulb className="h-3.5 w-3.5" /> 일정 계획
            </button>
          </div>
        </div>
      </div>

      <div
        ref={addTaskRef}
        className={cn(
          'mb-4 flex flex-col rounded-md border border-gray-200 shadow-sm transition-all',
          isAddingTask ? 'bg-white' : 'bg-white/90'
        )}
        onClick={e => {
          e.stopPropagation()
          setIsAddingTask(true)
        }}
      >
        <div className="flex items-center gap-4 p-4">
          {isAddingTask ? (
            <Circle className="h-5 w-5 shrink-0 text-gray-400" />
          ) : (
            <Plus className="h-5 w-5 shrink-0 text-[#2564cf]" />
          )}
          <Input
            className="h-auto border-none bg-transparent p-0 text-sm placeholder:text-[#2564cf] focus-visible:ring-0"
            placeholder={isAddingTask ? '' : '작업 추가'}
            onFocus={() => setIsAddingTask(true)}
          />
        </div>

        {isAddingTask && (
          <div className="flex items-center justify-between rounded-b-md border-t bg-[#f5f5f5]/50 px-4 py-2">
            <div className="flex items-center gap-4 text-gray-500">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded p-1 hover:bg-gray-100">
                    <Calendar className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 text-gray-800"
                >
                  <DropdownMenuItem className="justify-center font-bold text-gray-700">
                    기한
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CalendarArrowUp />
                    오늘
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CalendarPlus />
                    내일
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CalendarPlus2 />
                    다음 주
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CalendarClock />
                    날짜 선택
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <Trash2 />
                    기한 제거
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded p-1 hover:bg-gray-200">
                    <Bell className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 text-gray-800"
                >
                  <DropdownMenuItem className="justify-center font-bold text-gray-700">
                    미리 알림
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <ClockArrowDown />
                    오늘 나중에
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ClockPlus />
                    내일
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ClockPlus />
                    다음 주
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CalendarClock />
                    날짜 및 시간 선택
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <Trash2 />
                    미리 알림 제거
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded p-1 hover:bg-gray-200">
                    <Repeat className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 text-gray-800"
                >
                  <DropdownMenuItem className="justify-center font-bold text-gray-700">
                    반복
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <RotateCwSquare />
                    매일
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RotateCwSquare />
                    평일
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RotateCwSquare />
                    매주
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RotateCwSquare />
                    매월
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RotateCwSquare />
                    매년
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CalendarClock />
                    사용자 지정
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <Trash2 />
                    반복 안 함
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <button
              className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              추가
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        {tasks.map(task => (
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
                  selectedTaskId === task.id
                    ? 'text-[#2564cf]'
                    : 'text-gray-900'
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
                      className={
                        task.date === '오늘' || task.date === '내일'
                          ? 'text-[#2564cf]'
                          : ''
                      }
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
    </div>
  )
}

function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="4"
      />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
