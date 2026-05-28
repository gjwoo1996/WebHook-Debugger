'use server'

import { todoService as service } from '@/features/todo/services/todo.service'

// export async function createTodo(params: TodoInput): Promise<TodoOutput> {
// export async function createTodo(params: TodoInput) {
export async function createTodo() {
  try {
    // return await service.create(params)
  } catch (error) {
    console.error(error)
  }
}
