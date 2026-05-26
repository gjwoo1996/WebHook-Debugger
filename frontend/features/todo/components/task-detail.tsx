'use client'

import {
  Star,
  Plus,
  Sun,
  Bell,
  Calendar,
  Repeat,
  Tag,
  Paperclip,
  Trash2,
  X,
  Circle,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/shared/lib/utils'

interface TaskDetailProps {
  taskId: number | null
  onClose: () => void
}

export function TaskDetail({ taskId, onClose }: TaskDetailProps) {
  // In a real app, we would fetch task details based on taskId
  const taskTitle =
    taskId === 2 ? '테스트2' : taskId === 4 ? '테스트4' : '테스트1'

  return (
    <aside
      className="z-20 flex h-full w-[360px] flex-col border-l bg-[#faf9f8] shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="mt-4 flex-1 overflow-y-auto px-4 pb-4">
        {/* Task Title Area */}
        <div className="mb-2 rounded-sm border bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-1 items-start gap-3">
              <Circle className="mt-1 h-5 w-5 cursor-pointer text-gray-400 hover:text-[#2564cf]" />
              <div className="flex w-full flex-col gap-1">
                <h2 className="text-xl leading-tight font-bold">{taskTitle}</h2>
                <div className="group flex items-center gap-2 text-sm text-gray-500">
                  <Circle className="h-3.5 w-3.5" />
                  <span className="flex-1">테스트2-1</span>
                  <button className="rounded p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
            <Star className="mt-1 h-5 w-5 cursor-pointer text-gray-400 hover:text-yellow-500" />
          </div>

          <button className="mt-4 flex items-center gap-3 px-1 text-sm text-[#2564cf] hover:underline">
            <Plus className="h-4 w-4" />
            <span>다음 단계</span>
          </button>
        </div>

        {/* Action Group 1 */}
        <div className="mb-2 space-y-px overflow-hidden rounded-sm border bg-white shadow-sm">
          <button className="flex w-full items-center justify-between px-4 py-3 text-sm text-[#2564cf] hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Sun className="h-5 w-5" />
              <span>나의 하루에 추가됨</span>
            </div>
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* Action Group 2 */}
        <div className="mb-2 space-y-px overflow-hidden rounded-sm border bg-white text-gray-600 shadow-sm">
          <button className="flex w-full items-center gap-4 border-b px-4 py-3 text-sm hover:bg-gray-50">
            <Bell className="h-5 w-5" />
            <span>미리 알림</span>
          </button>
          <button className="flex w-full items-center justify-between border-b px-4 py-3 text-sm text-[#2564cf] hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5" />
              <span>오늘까지</span>
            </div>
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm hover:bg-gray-50">
            <Repeat className="h-5 w-5" />
            <span>반복</span>
          </button>
        </div>

        {/* Attachments */}
        <div className="mb-2 overflow-hidden rounded-sm border bg-white shadow-sm">
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Tag className="h-5 w-5" />
            <span>범주</span>
            {/* <Badge className="rounded-sm border-red-400 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
              Red
            </Badge>
            <Badge className="rounded-sm border-orange-400 bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Orange
            </Badge>
            <Badge className="rounded-sm border-yellow-400 bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
              Yellow
            </Badge>
            <Badge className="rounded-sm border-green-400 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Green
            </Badge>
            <Badge className="rounded-sm border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Blue
            </Badge>
            <Badge className="rounded-sm border-indigo-400 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              Indigo
            </Badge>
            <Badge className="rounded-sm border-purple-400 bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              Purple
            </Badge> */}
          </button>
        </div>

        <div className="mb-2 overflow-hidden rounded-sm border bg-white shadow-sm">
          {taskId === 2 && (
            <div className="group flex items-center justify-between border-b p-4 hover:bg-gray-50">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2564cf] text-white">
                  <Paperclip className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">111.png</span>
                  <span className="text-[10px] text-gray-500">
                    230.1KB • 이미지
                  </span>
                </div>
              </div>
              <X className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-gray-600" />
            </div>
          )}
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
            <Paperclip className="h-5 w-5" />
            <span>파일 추가</span>
          </button>
        </div>

        {/* Notes */}
        <div className="mb-2 rounded-sm border bg-white p-4 shadow-sm">
          <textarea
            className="min-h-[100px] w-full resize-none border-none p-0 text-sm placeholder:text-gray-400 focus:ring-0"
            placeholder="메모 추가"
            defaultValue={taskId === 2 ? '테스트 2-2' : ''}
          />
          <p className="mt-2 text-[10px] text-gray-500">업데이트: 13시간 전</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t bg-white p-4 text-[11px] text-gray-500">
        <button
          onClick={onClose}
          className="rounded p-1 hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <span>13시간 전 생성됨</span>
        <button className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
