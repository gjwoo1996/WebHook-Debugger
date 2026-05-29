'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Plus, Circle, Calendar, Bell, Repeat } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { TodoDropdown } from '@/features/todo/components/todo-dropdown'
import {
  deadlineOptions,
  reminderOptions,
  repeatOptions,
} from '@/features/todo/types/main-content-options'

export const FloatingInput = () => {
  const [isAddingTask, setIsAddingTask] = useState(false)
  const addTaskRef = useRef<HTMLDivElement>(null)

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
            <TodoDropdown
              trigger={
                <button className="rounded p-1 hover:bg-gray-100">
                  <Calendar className="h-4 w-4" />
                </button>
              }
              title="기한"
              items={deadlineOptions}
            />

            <TodoDropdown
              trigger={
                <button className="rounded p-1 hover:bg-gray-200">
                  <Bell className="h-4 w-4" />
                </button>
              }
              title="미리 알림"
              items={reminderOptions}
            />

            <TodoDropdown
              trigger={
                <button className="rounded p-1 hover:bg-gray-200">
                  <Repeat className="h-4 w-4" />
                </button>
              }
              title="반복"
              items={repeatOptions}
            />
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
  )
}
