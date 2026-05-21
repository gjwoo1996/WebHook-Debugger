import {
  Sun,
  Star,
  Calendar,
  User,
  Home,
  Plus,
  Menu,
} from "lucide-react"
import { cn } from "@/shared/lib/utils"

const navItems = [
  { icon: Sun, label: "오늘 할 일", count: 2, active: true },
  { icon: Star, label: "중요", count: 0 },
  { icon: Calendar, label: "계획된 일정", count: 2 },
  { icon: User, label: "나에게 할당됨", count: 0 },
  { icon: Home, label: "작업", count: 2 },
]

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r bg-white">
      <div className="p-4">
        <button className="rounded p-1 hover:bg-gray-100">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
              item.active
                ? "bg-[#f3f6fc] text-[#2564cf]"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon
                className={cn(
                  "h-5 w-5",
                  item.active ? "text-[#2564cf]" : "text-gray-500"
                )}
              />
              <span>{item.label}</span>
            </div>
            {item.count > 0 && (
              <span className={cn("text-xs", item.active ? "text-[#2564cf]" : "text-gray-500")}>
                {item.count}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="border-t p-2">
        <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#2564cf] hover:bg-gray-100">
          <div className="flex items-center gap-3">
            <Plus className="h-5 w-5" />
            <span>새 목록</span>
          </div>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </aside>
  )
}
