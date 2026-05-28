import {
  CheckCircle2,
  Printer,
  Star,
  Calendar,
  ArrowUpDown,
  CalendarPlus,
  Tag,
  CalendarArrowUp,
  CalendarPlus2,
  CalendarClock,
  Trash2,
  ClockArrowDown,
  ClockPlus,
  RotateCwSquare,
} from 'lucide-react'

export const headerOptions = [
  { label: '완료된 작업 표시', icon: CheckCircle2 },
  { label: '목록 인쇄', icon: Printer },
]

export const sortOptions = [
  { label: '중요도', icon: Star },
  { label: '기한', icon: Calendar },
  { label: '제목', icon: ArrowUpDown },
  { label: '만든 날짜', icon: CalendarPlus },
]

export const groupOptions = [
  { label: '범주', icon: Tag },
]

export const deadlineOptions = [
  { label: '오늘', icon: CalendarArrowUp },
  { label: '내일', icon: CalendarPlus },
  { label: '다음 주', icon: CalendarPlus2 },
  { label: '날짜 선택', icon: CalendarClock, separatorBefore: true },
  { label: '기한 제거', icon: Trash2, variant: 'destructive', separatorBefore: true },
]

export const reminderOptions = [
  { label: '오늘 나중에', icon: ClockArrowDown },
  { label: '내일', icon: ClockPlus },
  { label: '다음 주', icon: ClockPlus },
  { label: '날짜 및 시간 선택', icon: CalendarClock, separatorBefore: true },
  { label: '미리 알림 제거', icon: Trash2, variant: 'destructive', separatorBefore: true },
]

export const repeatOptions = [
  { label: '매일', icon: RotateCwSquare },
  { label: '평일', icon: RotateCwSquare },
  { label: '매주', icon: RotateCwSquare },
  { label: '매월', icon: RotateCwSquare },
  { label: '매년', icon: RotateCwSquare },
  { label: '사용자 지정', icon: CalendarClock, separatorBefore: true },
  { label: '반복 안 함', icon: Trash2, variant: 'destructive', separatorBefore: true },
]
