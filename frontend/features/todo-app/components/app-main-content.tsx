import {
  Plus,
  MoreHorizontal,
  Lightbulb,
  Grid3X3,
  Star,
  Circle,
  Calendar,
  Paperclip,
  Repeat,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/shared/lib/utils'

const tasks = [
  {
    id: 4,
    title: '테스트4',
    date: '5월 24일 일',
    subtext: '작업',
    important: true,
    completed: false,
    repeat: true,
  },
  {
    id: 3,
    title: '테스트3',
    subtext: '작업',
    important: true,
    completed: false,
  },
  {
    id: 2,
    title: '테스트2',
    date: '오늘',
    subtext: '작업 . 0/1',
    important: true,
    completed: false,
    selected: true,
    attachment: true,
  },
]

export function AppMainContent() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <header className="mb-6 flex items-center justify-between text-white">
          <div>
            <h1 className="text-3xl font-bold shadow-sm">오늘 할 일</h1>
            <p className="text-sm font-medium opacity-90">5월 22일 금요일</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded bg-black/20 p-2 backdrop-blur-sm hover:bg-black/30">
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button className="rounded bg-black/20 p-2 backdrop-blur-sm hover:bg-black/30">
              <Lightbulb className="h-5 w-5" />
            </button>
            <button className="rounded bg-black/20 p-2 backdrop-blur-sm hover:bg-black/30">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-2 overflow-y-auto pr-2">
          {tasks.map(task => (
            <div
              key={task.id}
              className={cn(
                'group flex items-center gap-4 rounded-md bg-white p-4 shadow-sm transition-all hover:bg-gray-50',
                task.selected && 'ring-2 ring-gray-300 ring-inset'
              )}
            >
              <Circle className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-[#2564cf]" />
              <div className="flex min-w-0 flex-1 flex-col">
                <span
                  className={cn(
                    'text-sm font-medium',
                    task.selected ? 'text-black' : 'text-gray-900'
                  )}
                >
                  {task.title}
                </span>
                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                  <span>{task.subtext}</span>
                  {task.date && (
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
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
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <Repeat className="h-3 w-3" />
                    </div>
                  )}
                  {task.attachment && (
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <Paperclip className="h-3 w-3" />
                    </div>
                  )}
                </div>
              </div>
              <Star
                className={cn(
                  'h-5 w-5 shrink-0',
                  task.important
                    ? 'fill-transparent text-gray-400 group-hover:text-yellow-500'
                    : 'text-gray-300'
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-4 rounded-md bg-white/90 p-4 shadow-lg backdrop-blur-md">
            <Plus className="h-5 w-5 text-[#2564cf]" />
            <Input
              className="h-auto border-none bg-transparent p-0 text-sm placeholder:text-gray-500 focus-visible:ring-0"
              placeholder="작업 추가"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
