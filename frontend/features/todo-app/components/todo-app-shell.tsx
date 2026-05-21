import { AppSidebar } from "./app-sidebar"
import { AppMainContent } from "./app-main-content"
import { AppTaskDetail } from "./app-task-detail"

export function TodoAppShell() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-sans text-gray-900 selection:bg-[#2564cf] selection:text-white">
      <AppSidebar />
      <div className="flex flex-1 overflow-hidden">
        <AppMainContent />
        <AppTaskDetail />
      </div>
    </div>
  )
}
