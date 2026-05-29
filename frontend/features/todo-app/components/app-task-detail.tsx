import {
  Star,
  Plus,
  Sun,
  Bell,
  Calendar,
  Repeat,
  Paperclip,
  Trash2,
  X,
  Circle,
  Download,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

export function AppTaskDetail() {
  return (
    <aside className="flex w-[360px] flex-col border-l bg-[#faf9f8]">
      <div className="flex items-center justify-end p-2">
        <button className="rounded-sm p-2 hover:bg-gray-200">
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Task Title Area */}
        <div className="mb-4 rounded-sm border bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-1 items-start gap-3 pt-1">
              <Circle className="mt-0.5 h-5 w-5 text-gray-400" />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl leading-tight font-bold">테스트2</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Circle className="h-4 w-4" />
                  <span>테스트2-1</span>
                  <button className="rounded p-1 hover:bg-gray-100">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
            <Star className="mt-1 h-5 w-5 text-gray-400" />
          </div>

          <button className="mt-4 flex items-center gap-3 px-1 text-sm text-[#2564cf] hover:underline">
            <Plus className="h-4 w-4" />
            <span>다음 단계</span>
          </button>
        </div>

        {/* Action Group 1 */}
        <div className="mb-4 space-y-px overflow-hidden rounded-sm border bg-white shadow-sm">
          <button className="flex w-full items-center justify-between border-b px-4 py-3 text-sm text-[#2564cf] hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Sun className="h-5 w-5" />
              <span>나의 하루에 추가됨</span>
            </div>
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Action Group 2 */}
        <div className="mb-4 space-y-px overflow-hidden rounded-sm border bg-white shadow-sm">
          <button className="flex w-full items-center gap-4 border-b px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Bell className="h-5 w-5" />
            <span>미리 알림</span>
          </button>
          <button className="flex w-full items-center justify-between border-b px-4 py-3 text-sm text-[#2564cf] hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5" />
              <span>오늘까지</span>
            </div>
            <X className="h-4 w-4 text-gray-400" />
          </button>
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Repeat className="h-5 w-5" />
            <span>반복</span>
          </button>
        </div>

        {/* Attachments */}
        <div className="mb-4 overflow-hidden rounded-sm border bg-white shadow-sm">
          <div className="group flex items-center justify-between border-b p-4">
            <div className="flex flex-1 items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2564cf] text-white">
                <Download className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">111.png</span>
                <span className="text-[10px] text-gray-500">
                  230.1KB • 이미지
                </span>
              </div>
            </div>
            <X className="h-4 w-4 text-gray-400" />
          </div>
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Paperclip className="h-5 w-5" />
            <span>파일 추가</span>
          </button>
        </div>

        {/* Notes */}
        <div className="mb-4 rounded-sm border bg-white p-4 shadow-sm">
          <textarea
            className="min-h-[100px] w-full resize-none border-none p-0 text-sm placeholder:text-gray-400 focus:ring-0"
            placeholder="메모 추가"
            defaultValue="테스트 2-2"
          />
          <p className="mt-2 text-[10px] text-gray-500">업데이트: 13시간 전</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t bg-white/50 p-4 text-[10px] text-gray-500">
        <div className="w-8" />
        <span>13시간 전 생성됨</span>
        <button className="rounded p-1 hover:bg-gray-200">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
