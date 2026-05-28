import { makeQueryClient } from '@/shared/lib/react-query'
import { prefetchTodoPage } from '@/features/todo/prefetch/todo.prefetch'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { MainContent } from '@/features/todo/components/main-content'

export default async function Page() {
  const queryClient = makeQueryClient()
  // await prefetchTodoPage(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <Loader>
        <MainContent />
      </Loader> */}
      <MainContent />
    </HydrationBoundary>
  )
}
