'use client'

import React, { createContext, useContext, useState } from 'react'

interface TodoContextType {
  selectedTaskId: number | null
  setSelectedTaskId: (id: number | null) => void
  activeNavLabel: string
  setActiveNavLabel: (label: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)
  const [activeNavLabel, setActiveNavLabel] = useState<string>('오늘 할 일')

  return (
    <TodoContext.Provider
      value={{
        selectedTaskId,
        setSelectedTaskId,
        activeNavLabel,
        setActiveNavLabel,
      }}
    >
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
