import { NextRequest, NextResponse } from 'next/server'
import { todoService as service } from '@/features/todo/services/todo.service'

/**
 * @description 목록 조회
 */
export async function GET(request: NextRequest) {
  try {
    const data = await service.getAll()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
