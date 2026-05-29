import {
  Sun,
  Star,
  Calendar,
  User,
  Home,
  Flag,
  ShoppingCart,
  CheckCircle2,
  Printer,
  ArrowUpDown,
  CalendarPlus,
  Tag,
} from 'lucide-react'
import { TodoDropdownItem } from '@/features/todo/components/todo-dropdown'

export const defaultHeaderOptions = [
  { label: '완료된 작업 표시', icon: CheckCircle2 },
  { label: '목록 인쇄', icon: Printer },
] as TodoDropdownItem[]

export const defaultSortOptions = [
  { label: '중요도', icon: Star },
  { label: '기한', icon: Calendar },
  { label: '제목', icon: ArrowUpDown },
  { label: '만든 날짜', icon: CalendarPlus },
] as TodoDropdownItem[]

export const defaultGroupOptions = [
  { label: '범주', icon: Tag },
] as TodoDropdownItem[]

export const navItems = [
  {
    icon: Sun,
    label: '오늘 할 일',
    count: 2,
    active: true,
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
  {
    icon: Star,
    label: '중요',
    count: 0,
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
  {
    icon: Calendar,
    label: '계획된 일정',
    count: 2,
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
  {
    icon: User,
    label: '나에게 할당됨',
    count: 0,
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
  {
    icon: Home,
    label: '작업',
    count: 2,
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
]

export const listItems = [
  {
    icon: Flag,
    label: '시작하기',
    count: 7,
    color: 'text-orange-500',
    active: false,
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
  {
    icon: ShoppingCart,
    label: '식료품',
    count: 5,
    color: 'text-purple-500',
    headerOptions: defaultHeaderOptions,
    sortOptions: defaultSortOptions,
    groupOptions: defaultGroupOptions,
  },
]
