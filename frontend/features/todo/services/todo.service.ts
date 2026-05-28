import { todoRepository as repository } from '@/features/todo/repositories/todo.repository'
/* import { TodoSearchParams } from '@/features/todo/types/todo.type'
import { TodoInput } from '@/features/todo/schema/todo.schema' */

export const todoService = {
  getAll: async () => {
    return await repository.findAll()
  },

  /* getList: async (params: TodoSearchParams) => {
    return await repository.findMany(params)
  }, */

  getOne: async (id: number) => {
    return await repository.findUnique(id)
  },

  /* create: async (params: TodoInput) => {
    return await repository.insert(params)
  },

  save: async (id: number, params: TodoInput) => {
    return await repository.update(id, params)
  }, */

  remove: async (id: number) => {
    return await repository.delete(id)
  },
}
