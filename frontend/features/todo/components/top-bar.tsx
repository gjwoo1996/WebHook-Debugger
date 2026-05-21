import { Search, Settings, HelpCircle, Bell, User } from "lucide-react"
import { Input } from "@/shared/components/ui/input"

export function TopBar() {
  return (
    <header className="flex h-12 w-full items-center justify-between bg-[#2564cf] px-4 text-white">
      <div className="flex items-center gap-4">
        <button className="rounded p-1 hover:bg-white/10">
          <Settings className="h-5 w-5" />
        </button>
        <span className="font-semibold">To Do</span>
      </div>

      <div className="relative max-w-xl flex-1 px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2564cf]" />
          <Input
            className="h-8 w-full border-none bg-white pl-10 text-black placeholder:text-gray-500 focus-visible:ring-0"
            placeholder="검색"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded p-2 hover:bg-white/10">
          <Settings className="h-5 w-5" />
        </button>
        <button className="rounded p-2 hover:bg-white/10">
          <HelpCircle className="h-5 w-5" />
        </button>
        <button className="relative rounded p-2 hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
            2
          </span>
        </button>
        <button className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30">
          <span className="text-xs font-bold">S</span>
        </button>
      </div>
    </header>
  )
}
