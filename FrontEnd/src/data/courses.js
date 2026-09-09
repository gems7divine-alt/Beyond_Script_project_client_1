import {
  Heart,
  Brain,
  Sparkles,
  Users,
  HeartHandshake,
  Target,
  TrendingUp,
} from 'lucide-react'

export const categories = [
  { id: 'all', label: 'All Courses', icon: Sparkles },
  { id: 'personal-growth', label: 'Personal Growth', icon: TrendingUp },
  { id: 'mindset', label: 'Mindset & Motivation', icon: Brain },
  { id: 'emotional-healing', label: 'Emotional Healing', icon: Heart },
  { id: 'relationships', label: 'Relationships', icon: Users },
  { id: 'confidence', label: 'Confidence & Self Love', icon: HeartHandshake },
  { id: 'purpose', label: 'Purpose & Life Design', icon: Target },
]

export const sortOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
]

export const courses = [
  {
    id: 1,
    title: 'Life Transformation Mastery',
    description: 'A complete guide to transform your life from inside out.',
    image: null,
    badge: 'Bestseller',
    rating: 4.8,
    reviewCount: '1.2K',
    duration: '8h 30m',
    price: 2999,
    category: 'personal-growth',
    isPaid: true,
  },
  {
    id: 2,
    title: 'Mindset & Inner Growth',
    description: 'Reprogram your mind and build unshakable self-belief.',
    image: null,
    badge: 'Popular',
    rating: 4.7,
    reviewCount: '980',
    duration: '6h 15m',
    price: 2499,
    category: 'mindset',
    isPaid: true,
  },
]
