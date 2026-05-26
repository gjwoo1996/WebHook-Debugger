'use client'

import Header from '@/components/layout/header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { WebSidebar as Sidebar } from '@/features/todo/components/web-sidebar'
import { TaskDetail } from '@/features/todo/components/task-detail'
import { TodoProvider, useTodo } from '@/features/todo/context/todo-context'

function WebLayoutContent({ children }: { children: React.ReactNode }) {
  const { selectedTaskId, setSelectedTaskId } = useTodo()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar className="top-12! h-[calc(100vh-3rem)]!" />
          <SidebarInset
            className="flex flex-row overflow-hidden bg-white"
            onClick={() => setSelectedTaskId(null)}
          >
            <div className="flex-1 overflow-y-auto">{children}</div>
            {selectedTaskId !== null && (
              <TaskDetail
                taskId={selectedTaskId}
                onClose={() => setSelectedTaskId(null)}
              />
            )}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TodoProvider>
      <WebLayoutContent>{children}</WebLayoutContent>
    </TodoProvider>
  )
}
