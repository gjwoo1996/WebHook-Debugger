import {
  Search,
  Sun,
  Star,
  Calendar,
  User,
  Home,
  Plus,
  ChevronDown,
  Flag,
  ShoppingCart,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/shared/lib/utils'

const navItems = [
  { icon: Sun, label: '오늘 할 일', count: 3, active: true },
  { icon: Star, label: '중요', count: 0 },
  { icon: Calendar, label: '계획된 일정', count: 3 },
  { icon: User, label: '나에게 할당됨', count: 0 },
  { icon: Home, label: '작업', count: 4 },
]

const listItems = [
  { icon: Flag, label: '시작하기', count: 7, color: 'text-orange-500' },
  { icon: ShoppingCart, label: '식료품', count: 5, color: 'text-purple-500' },
]

export function AppSidebar() {
  return (
    <aside className="flex w-72 flex-col border-r bg-[#f4f4f4]">
      <div className="flex items-center gap-3 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d5d3c] font-bold text-white">
          S
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold">
            shoon0615@gmail.com
          </span>
          <div className="flex items-center text-[10px] text-gray-500">
            <span className="truncate">shoon0615@gmail.com</span>
            <ChevronDown className="ml-1 h-3 w-3" />
          </div>
        </div>
      </div>

      <div className="mb-4 px-4">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            className="h-8 w-full border-gray-200 bg-white pl-9 text-sm focus-visible:ring-0"
            placeholder="검색"
          />
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2">
        {navItems.map(item => (
          <button
            key={item.label}
            className={cn(
              'flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm font-medium transition-colors',
              item.active
                ? 'bg-white text-[#2564cf] shadow-sm'
                : 'text-gray-700 hover:bg-gray-200'
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon
                className={cn(
                  'h-5 w-5',
                  item.active ? 'text-[#2564cf]' : 'text-gray-500'
                )}
              />
              <span>{item.label}</span>
            </div>
            {item.count > 0 && (
              <span
                className={cn(
                  'text-xs',
                  item.active ? 'text-[#2564cf]' : 'text-gray-500'
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        ))}

        <div className="py-2">
          <div className="mx-2 h-px bg-gray-200" />
        </div>

        {listItems.map(item => (
          <button
            key={item.label}
            className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            <div className="flex items-center gap-3">
              <item.icon className={cn('h-5 w-5', item.color)} />
              <span>{item.label}</span>
            </div>
            {item.count > 0 && (
              <span className="text-xs text-gray-500">{item.count}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="flex items-center justify-between border-t p-2 text-[#2564cf]">
        <button className="flex flex-1 items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium hover:bg-gray-200">
          <Plus className="h-5 w-5" />
          <span>새 목록</span>
        </button>
        <button className="rounded-sm p-2 hover:bg-gray-200">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </aside>
  )
}
