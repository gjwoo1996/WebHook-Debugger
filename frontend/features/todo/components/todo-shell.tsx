import { TopBar } from "./top-bar"
import { Sidebar } from "./sidebar"
import { MainContent } from "./main-content"
import { TaskDetail } from "./task-detail"

export function TodoShell() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-white font-sans">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
        <TaskDetail />
      </div>
    </div>
  )
}
