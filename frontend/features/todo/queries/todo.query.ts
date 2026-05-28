import { queryOptions } from '@tanstack/react-query'
import { api } from '@/shared/lib/axios/core'
// import { TodoSearchParams } from '@/features/todo/types/todo.type'

export const todoKeys = {
  all: ['todo'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  // list: (params: TodoSearchParams) => [...todoKeys.lists(), params] as const,
  detail: (id: number) => [...todoKeys.all, 'detail', id] as const,
}

export const todoQueryOptions = {
  lists: () =>
    queryOptions({
      queryKey: todoKeys.lists(),
      queryFn: () => api.get('/todo').then(res => res.data),
    }),

  /* lists: (params: TodoSearchParams) =>
    queryOptions({
      queryKey: todoKeys.list(params),
      queryFn: () => api.get('/todo', { params }).then(res => res.data),
    }), */

  detail: (id: number) =>
    queryOptions({
      queryKey: todoKeys.detail(id),
      queryFn: () => api.get(`/todo/${id}`).then(res => res.data),
      enabled: !!id,
    }),
}
