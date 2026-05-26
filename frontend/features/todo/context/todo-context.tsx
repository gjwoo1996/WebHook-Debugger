'use client'

import React, { createContext, useContext, useState } from 'react'

interface TodoContextType {
  selectedTaskId: number | null
  setSelectedTaskId: (id: number | null) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

  return (
    <TodoContext.Provider value={{ selectedTaskId, setSelectedTaskId }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodo() {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}
