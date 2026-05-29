'use client'

import {
  LayoutGrid,
  List,
  ArrowUpDown,
  Users,
  Lightbulb,
  MoreHorizontal,
  Menu,
  Sun,
} from 'lucide-react'
import { useTodo } from '@/features/todo/context/todo-context'
import { useSidebar } from '@/components/ui/sidebar'
import { navItems, listItems } from '@/features/todo/types/web-sidebar-options'
import { TodoDropdown } from '@/features/todo/components/todo-dropdown'
import { FloatingInput } from '@/features/todo/components/floating-input'
import { TaskList } from '@/features/todo/components/task-list'

export function MainContent() {
  const { activeNavLabel } = useTodo()
  const { state, toggleSidebar } = useSidebar()

  // Find active nav item to get options
  const activeNavItem = [...navItems, ...listItems].find(
    item => item.label === activeNavLabel
  )!

  // ! 로 마무리 = Non-null assertion = "undefined 절대 아님"
  // if (!activeNavItem) throw new Error('Cannot destructure property 'headerOptions' of undefined')
  // 위 내용과 동일한 결과 출력
  // 실제로는 "반드시 존재" 하는 구조라면 오히려 숨겨진 버그를 감추게됨(조용히 빈 배열 처리)
  /* const headerOptions = activeNavItem?.headerOptions || []
  const sortOptions = activeNavItem?.sortOptions || [] */

  const { headerOptions, sortOptions, groupOptions } = activeNavItem
  const ActiveIcon = activeNavItem?.icon || Sun

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
                <ActiveIcon className="h-6 w-6 text-[#2564cf]" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{activeNavLabel}</h1>
                <TodoDropdown
                  trigger={
                    <button className="rounded p-1 hover:bg-gray-200">
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>
                  }
                  title="옵션"
                  items={headerOptions}
                />
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
            <TodoDropdown
              trigger={
                <button className="flex items-center gap-1 hover:text-[#2564cf]">
                  <ArrowUpDown className="h-3.5 w-3.5" /> 정렬
                </button>
              }
              title="정렬 기준"
              items={sortOptions}
            />

            <TodoDropdown
              trigger={
                <button className="flex items-center gap-1 hover:text-[#2564cf]">
                  <Users className="h-3.5 w-3.5" /> 그룹
                </button>
              }
              title="다음을 기준으로 그룹화"
              items={groupOptions}
            />

            <button className="flex items-center gap-1 hover:text-[#2564cf]">
              <Lightbulb className="h-3.5 w-3.5" /> 일정 계획
            </button>
          </div>
        </div>
      </div>

      {/* 작업 추가 영역 */}
      <FloatingInput />

      {/* 작업 목록 영역 */}
      <TaskList />
    </div>
  )
}
