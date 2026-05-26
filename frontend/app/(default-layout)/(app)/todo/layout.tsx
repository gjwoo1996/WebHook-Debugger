import { AppSidebar } from '@/features/todo-app/components/app-sidebar'
import { AppTaskDetail } from '@/features/todo-app/components/app-task-detail'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-sans text-gray-900 selection:bg-[#2564cf] selection:text-white">
      <AppSidebar />
      <div className="flex flex-1 overflow-hidden">
        {children}
        <AppTaskDetail />
      </div>
    </div>
  )
}
