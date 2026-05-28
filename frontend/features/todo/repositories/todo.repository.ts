import 'server-only'

import { boApi } from '@/shared/lib/axios/core'
/* import { toQueryString } from '@/shared/lib/utils'
import { TodoSearchParams } from '@/features/todo/types/todo.type'
import { TodoInput } from '@/features/todo/schema/todo.schema' */

const apiUrl = '/todo'

export const todoRepository = {
  // findAll: () => boApi.get<TodoOutput[]>(`${apiUrl}`).then(res => res.data),
  findAll: () => boApi.get(`${apiUrl}`).then(res => res.data),

  /* findMany: (params: TodoSearchParams) =>
    boApi.get(`${apiUrl}${toQueryString(params)}`).then(res => res.data), */

  findUnique: (id: number) =>
    boApi.get(`${apiUrl}/${id}`).then(res => res.data),

  /* insert: (params: TodoInput) =>
    boApi.post(`${apiUrl}`, params).then(res => res.data),

  update: (id: number, params: TodoInput) =>
    boApi.put(`${apiUrl}/${id}`, params).then(res => res.data), */

  delete: (id: number) => boApi.delete(`${apiUrl}/${id}`).then(res => res.data),
}
