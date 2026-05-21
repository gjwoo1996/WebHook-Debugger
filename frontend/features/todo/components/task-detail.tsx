import { Star, Plus, Sun, Bell, Calendar, Repeat, Tag, Paperclip, Trash2, LogOut, Circle } from "lucide-react"
import { cn } from "@/shared/lib/utils"

export function TaskDetail() {
  return (
    <aside className="flex w-96 flex-col border-l bg-[#faf9f8]">
      <div className="flex-1 overflow-y-auto">
        <div className="m-4 rounded-md border bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <Circle className="h-5 w-5 text-[#2564cf]" />
              <h2 className="text-lg font-bold">테스트1</h2>
            </div>
            <Star className="h-5 w-5 text-gray-300" />
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <button className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-[#2564cf] hover:bg-gray-100">
              <Plus className="h-4 w-4" />
              <span>단계 추가</span>
            </button>
          </div>
        </div>

        <div className="mx-4 flex flex-col gap-1 rounded-md border bg-white shadow-sm overflow-hidden">
          <button className="flex items-center gap-3 px-4 py-3 text-sm text-[#2564cf] hover:bg-gray-50 border-b">
            <Sun className="h-5 w-5" />
            <span>나의 하루에 추가됨</span>
          </button>
          
          <div className="flex flex-col">
            <button className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 border-b">
              <Bell className="h-5 w-5" />
              <span>미리 알림</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-gray-50 border-b">
              <Calendar className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span>지연, 어제</span>
              </div>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
              <Repeat className="h-5 w-5" />
              <span>반복</span>
            </button>
          </div>
        </div>

        <div className="m-4 flex flex-col gap-1 rounded-md border bg-white shadow-sm overflow-hidden">
          <button className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 border-b">
            <Tag className="h-5 w-5" />
            <div className="flex items-center gap-1">
              <span className="text-gray-400">#</span>
            </div>
          </button>
          <div className="flex items-center gap-3 px-4 py-3 text-sm border-b">
            <div className="flex items-center gap-3 flex-1">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2564cf] text-white font-bold text-[10px]">
                PNG
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-xs">111.png</span>
                <span className="text-[10px] text-gray-500">230.1KB • 이미지</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Paperclip className="h-5 w-5" />
            <span>파일 추가</span>
          </button>
        </div>

        <div className="mx-4 mb-4 rounded-md border bg-white p-4 shadow-sm">
          <textarea
            className="w-full resize-none border-none p-0 text-sm focus:ring-0 placeholder:text-gray-400"
            placeholder="메모 추가"
            rows={4}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t p-4 text-xs text-gray-500">
        <button className="rounded p-1 hover:bg-gray-200">
          <LogOut className="h-4 w-4" />
        </button>
        <span>오늘 생성됨</span>
        <button className="rounded p-1 hover:bg-gray-200">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
