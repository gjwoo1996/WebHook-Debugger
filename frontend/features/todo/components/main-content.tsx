import { Plus, LayoutGrid, List, ArrowUpDown, Users, Lightbulb, MoreHorizontal, CheckCircle2, Circle, Star, Info } from "lucide-react"
import { Input } from "@/shared/components/ui/input"
import { cn } from "@/shared/lib/utils"

const tasks = [
  { id: 1, title: "테스트2", date: "2026.05.22.", important: false, completed: false },
  { id: 2, title: "테스트1", date: "2026.05.20.", important: false, completed: false, overdue: true, selected: true },
]

export function MainContent() {
  return (
    <main className="flex flex-1 flex-col bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-[#2564cf]" />
            <h1 className="text-2xl font-bold">오늘 할 일</h1>
            <button className="rounded p-1 hover:bg-gray-100">
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="text-sm text-gray-500">5월 21일, 목요일</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-md bg-gray-100 p-1">
            <button className="flex items-center gap-2 rounded bg-white px-3 py-1 text-sm font-medium shadow-sm">
              <LayoutGrid className="h-4 w-4" />
              그리드
            </button>
            <button className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-200">
              <List className="h-4 w-4" />
              목록
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:underline">
              <ArrowUpDown className="h-4 w-4" /> 정렬
            </button>
            <button className="flex items-center gap-1 hover:underline">
              <Users className="h-4 w-4" /> 그룹
            </button>
            <button className="flex items-center gap-1 hover:underline">
              <Lightbulb className="h-4 w-4" /> 일정 계획
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-4 rounded-md border border-gray-200 bg-white p-4 text-[#2564cf] shadow-sm">
        <Plus className="h-5 w-5" />
        <Input 
          className="border-none p-0 focus-visible:ring-0 placeholder:text-[#2564cf]" 
          placeholder="작업 추가" 
        />
      </div>

      <div className="flex flex-col border rounded-md overflow-hidden">
        <div className="grid grid-cols-[1fr_200px_100px] gap-4 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-500 border-b">
          <div>제목</div>
          <div>기한</div>
          <div className="text-center">중요도</div>
        </div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "grid grid-cols-[1fr_200px_100px] gap-4 items-center px-4 py-3 border-b last:border-0 hover:bg-gray-50 transition-colors",
              task.selected && "bg-[#f3f6fc] ring-1 ring-inset ring-gray-300"
            )}
          >
            <div className="flex items-center gap-3">
              <Circle className="h-5 w-5 text-gray-400" />
              <span className="text-sm">{task.title}</span>
              {task.selected && <Info className="h-4 w-4 text-gray-400 ml-auto" />}
            </div>
            <div className={cn("text-sm", task.overdue ? "text-red-600" : "text-gray-500")}>
              {task.date}
            </div>
            <div className="flex justify-center">
              <Star className={cn("h-5 w-5", task.important ? "fill-yellow-400 text-yellow-400" : "text-gray-300")} />
            </div>
          </div>
        ))}
      </div>
    </main>
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
      <circle cx="12" cy="12" r="4" />
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
