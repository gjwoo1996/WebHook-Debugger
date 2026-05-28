import {
  Sun,
  Star,
  Calendar,
  User,
  Home,
  Flag,
  ShoppingCart,
} from 'lucide-react'

export const navItems = [
  { icon: Sun, label: '오늘 할 일', count: 2, active: true },
  { icon: Star, label: '중요', count: 0 },
  { icon: Calendar, label: '계획된 일정', count: 2 },
  { icon: User, label: '나에게 할당됨', count: 0 },
  { icon: Home, label: '작업', count: 2 },
]

export const listItems = [
  {
    icon: Flag,
    label: '시작하기',
    count: 7,
    color: 'text-orange-500',
    active: false,
  },
  { icon: ShoppingCart, label: '식료품', count: 5, color: 'text-purple-500' },
]
