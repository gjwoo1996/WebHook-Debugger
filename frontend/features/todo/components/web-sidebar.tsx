'use client'

import * as React from 'react'
import {
  Sun,
  Star,
  Calendar,
  User,
  Home,
  Plus,
  Menu,
  Flag,
  ShoppingCart,
} from 'lucide-react'
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

const navItems = [
  { icon: Sun, label: '오늘 할 일', count: 2, active: true },
  { icon: Star, label: '중요', count: 0 },
  { icon: Calendar, label: '계획된 일정', count: 2 },
  { icon: User, label: '나에게 할당됨', count: 0 },
  { icon: Home, label: '작업', count: 2 },
]

const listItems = [
  {
    icon: Flag,
    label: '시작하기',
    count: 7,
    color: 'text-orange-500',
    active: false,
  },
  { icon: ShoppingCart, label: '식료품', count: 5, color: 'text-purple-500' },
]

export function WebSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar } = useSidebar()

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
          {navItems.map(item => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                isActive={item.active}
                className={cn(
                  'flex h-auto w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  item.active
                    ? 'bg-[#f3f6fc] text-[#2564cf] hover:bg-blue-100 hover:text-[#2564cf]'
                    : 'text-gray-700 hover:bg-gray-200'
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={cn(
                      'h-5 w-5!',
                      item.active ? 'text-[#2564cf]' : 'text-gray-500'
                    )}
                  />
                  <span>{item.label}</span>
                </div>
                {item.count > 0 && (
                  <SidebarMenuBadge
                    className={cn(
                      'static h-auto min-w-0 p-0 text-xs font-medium',
                      item.active ? 'text-[#2564cf]' : 'text-gray-500'
                    )}
                  >
                    {item.count}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarSeparator />
          {listItems.map(item => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                isActive={item.active}
                className={cn(
                  'flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200'
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn('h-5 w-5', item.color)} />
                  <span>{item.label}</span>
                </div>
                {item.count > 0 && (
                  <SidebarMenuBadge className={cn('text-xs text-gray-500')}>
                    {item.count}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
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
