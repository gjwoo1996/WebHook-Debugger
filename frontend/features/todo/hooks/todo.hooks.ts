'use client'

import {
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { todoKeys, todoQueryOptions } from '@/features/todo/queries/todo.query'
// import { TodoSearchParams } from '@/features/todo/types/todo.type'
import { createTodo } from '@/features/todo/actions/todo.actions'

/** 조회(목록) */
export function useTodoLists() {
  return useSuspenseQuery(todoQueryOptions.lists())
}

/** 조회(목록) */
/* export function useTodoList(params: TodoSearchParams) {
  return useSuspenseQuery(todoQueryOptions.list(params))
} */

/** 조회(상세) */
export function useTodoDetail(id: number) {
  return useSuspenseQuery(todoQueryOptions.detail(id))
}

/** 생성 */
export function useCreateTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: todoKeys.lists() })
    },
  })
}
