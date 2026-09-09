import {
  Heart,
  Brain,
  Sparkles,
  Users,
  HeartHandshake,
  Target,
  TrendingUp,
  ListChecks,
} from 'lucide-react'

export const categories = [
  { id: 'all', label: 'All Workbooks', icon: Sparkles },
  { id: 'personal-growth', label: 'Personal Growth', icon: TrendingUp },
  { id: 'mindset', label: 'Mindset & Motivation', icon: Brain },
  { id: 'emotional-healing', label: 'Emotional Healing', icon: Heart },
  { id: 'relationships', label: 'Relationships', icon: Users },
  { id: 'confidence', label: 'Confidence & Self Love', icon: HeartHandshake },
  { id: 'purpose', label: 'Purpose & Life Design', icon: Target },
  { id: 'habits', label: 'Habits & Productivity', icon: ListChecks },
]

export const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
]

export const formatOptions = [
  { id: 'all', label: 'All Formats' },
  { id: 'digital', label: 'Digital (PDF)' },
  { id: 'printable', label: 'Printable' },
]

export const workbooks = [
  {
    id: 1,
    title: 'Self Discovery Journal',
    description: 'Guided prompts and exercises to help you understand yourself better and live with clarity.',
    image: null,
    format: 'digital',
    pages: 42,
    price: 399,
    category: 'personal-growth',
  },
  {
    id: 2,
    title: 'Mindset Reset Workbook',
    description: 'Reprogram limiting beliefs and build a powerful, positive mindset.',
    image: null,
    format: 'digital',
    pages: 36,
    price: 349,
    category: 'mindset',
  },
  {
    id: 3,
    title: 'Emotional Healing Workbook',
    description: 'Heal past wounds, release emotional blocks, and create inner peace.',
    image: null,
    format: 'digital',
    pages: 40,
    price: 399,
    category: 'emotional-healing',
  },
  {
    id: 4,
    title: 'Relationship Clarity Workbook',
    description: 'Build deeper connections and create healthy, fulfilling relationships.',
    image: null,
    format: 'digital',
    pages: 34,
    price: 349,
    category: 'relationships',
  },
]
