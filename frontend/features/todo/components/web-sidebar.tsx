'use client'

import * as React from 'react'
import { Plus, Menu } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  useSidebar,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { navItems, listItems } from '@/features/todo/types/web-sidebar-options'
import { useTodo } from '@/features/todo/context/todo-context'

export function WebSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar } = useSidebar()
  const { activeNavLabel, setActiveNavLabel } = useTodo()

  return (
    <Sidebar
      className="border-r bg-white"
      {...props}
    >
      {state === 'expanded' && (
        <SidebarHeader className="p-4">
          <button
            onClick={toggleSidebar}
            className="w-fit rounded p-1 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </SidebarHeader>
      )}

      <SidebarContent className="no-scrollbar px-2">
        <SidebarMenu className="gap-0">
          {navItems.map(item => {
            const isActive = activeNavLabel === item.label
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  isActive={isActive}
                  onClick={() => setActiveNavLabel(item.label)}
                  className={cn(
                    'flex h-auto w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? '!bg-[#e8f0fe] !text-[#2564cf]'
                      : 'text-gray-700 hover:bg-gray-200'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        'h-5 w-5!',
                        isActive ? '!text-[#2564cf]' : 'text-gray-500'
                      )}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.count > 0 && (
                    <SidebarMenuBadge
                      className={cn(
                        'static h-auto min-w-0 p-0 text-xs font-medium',
                        isActive ? '!text-[#2564cf]' : 'text-gray-500'
                      )}
                    >
                      {item.count}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
          <SidebarSeparator />
          {listItems.map(item => {
            const isActive = activeNavLabel === item.label
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  isActive={isActive}
                  onClick={() => setActiveNavLabel(item.label)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200',
                    isActive && '!bg-[#e8f0fe] !text-[#2564cf]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        'h-5 w-5',
                        isActive ? '!text-[#2564cf]' : item.color
                      )}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.count > 0 && (
                    <SidebarMenuBadge
                      className={cn(
                        'text-xs',
                        isActive ? '!text-[#2564cf]' : 'text-gray-500'
                      )}
                    >
                      {item.count}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex h-auto w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#2564cf] hover:bg-gray-200 hover:text-[#2564cf]">
              <div className="flex items-center gap-3">
                <Plus className="h-5 w-5!" />
                <span>새 목록</span>
              </div>
              <Plus className="h-4 w-4!" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
