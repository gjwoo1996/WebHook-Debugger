'use client'

import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { Fragment } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export interface TodoDropdownItem {
  label: string
  icon: LucideIcon
  variant?: 'default' | 'destructive'
  separatorBefore?: boolean
}

interface TodoDropdownProps {
  trigger: React.ReactNode
  title: string
  items: TodoDropdownItem[]
  align?: 'start' | 'center' | 'end'
}

export function TodoDropdown({
  trigger,
  title,
  items,
  align = 'center',
}: TodoDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="w-56 text-gray-800"
      >
        <DropdownMenuItem className="justify-center font-bold text-gray-700 hover:bg-transparent cursor-default">
          {title}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {items.map((item, idx) => (
          <Fragment key={`${item.label}-${idx}`}>
            {item.separatorBefore && <DropdownMenuSeparator />}
            <DropdownMenuItem variant={item.variant as any}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
