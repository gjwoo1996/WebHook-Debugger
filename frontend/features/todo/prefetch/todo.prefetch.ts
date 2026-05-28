import { QueryClient } from '@tanstack/react-query'
import {
  // TodoSearchParams,
  todoQueryOptions,
} from '@/features/todo/queries/todo.query'

export async function prefetchTodoPage(queryClient: QueryClient) {
  await Promise.all([queryClient.prefetchQuery(todoQueryOptions.lists())])
}

/* export async function prefetchTodoPage(
  queryClient: QueryClient,
  params: TodoSearchParams
) {
  await Promise.all([
    queryClient.prefetchQuery(todoQueryOptions.list(params))
  ])
} */
