export interface WorkItem {
  id: string
  category: string
  type: string
  title?: string
  image: string
  alt: string
  featured?: boolean
  width?: 'full' | 'half' | 'two-thirds' | 'third'
  height?: 'tall' | 'normal' | 'short'
}

export const selectedWork: WorkItem[] = [
  {
    id: 'work-1',
    category: 'Editorial',
    type: 'High Fashion',
    title: 'Vogue Africa Editorial',
    image: '/images/work/editorial-1.jpg',
    alt: 'Editorial makeup look - high fashion',
    featured: true,
    width: 'full',
    height: 'tall',
  },
  {
    id: 'work-2',
    category: 'Bridal',
    type: 'Traditional Wedding',
    title: 'Ngondo Ceremony',
    image: '/images/work/bridal-1.jpg',
    alt: 'Traditional Cameroonian bridal makeup',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'work-3',
    category: 'Beauty',
    type: 'Glamour',
    title: 'Golden Hour',
    image: '/images/work/beauty-1.jpg',
    alt: 'Glamour beauty makeup with gold accents',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'work-4',
    category: 'Celebrity',
    type: 'Red Carpet',
    title: 'Canal 2\'Or Awards',
    image: '/images/work/celebrity-1.jpg',
    alt: 'Celebrity red carpet makeup',
    featured: true,
    width: 'two-thirds',
    height: 'tall',
  },
  {
    id: 'work-5',
    category: 'Editorial',
    type: 'Avant-Garde',
    title: 'Structural Beauty',
    image: '/images/work/editorial-2.jpg',
    alt: 'Avant-garde editorial makeup',
    width: 'third',
    height: 'tall',
  },
  {
    id: 'work-6',
    category: 'Bridal',
    type: 'Modern Bride',
    title: 'White Wedding',
    image: '/images/work/bridal-2.jpg',
    alt: 'Modern bridal makeup look',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'work-7',
    category: 'Photoshoot',
    type: 'Creative',
    title: 'Desert Rose',
    image: '/images/work/creative-1.jpg',
    alt: 'Creative photoshoot makeup',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'work-8',
    category: 'Celebrity',
    type: 'Music Video',
    title: 'Artist Promo',
    image: '/images/work/celebrity-2.jpg',
    alt: 'Music video makeup look',
    width: 'two-thirds',
    height: 'normal',
  },
  {
    id: 'work-9',
    category: 'Beauty',
    type: 'Natural',
    title: 'No-Makeup Makeup',
    image: '/images/work/beauty-2.jpg',
    alt: 'Natural beauty makeup',
    width: 'third',
    height: 'short',
  },
]

export const celebrityEditorial: WorkItem[] = [
  {
    id: 'celeb-1',
    category: 'Celebrity',
    type: 'Red Carpet',
    title: 'Canal 2\'Or 2023',
    image: '/images/celebrity/celeb-1.jpg',
    alt: 'Celebrity at Canal 2\'Or Awards',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'celeb-2',
    category: 'Editorial',
    type: 'Magazine Cover',
    title: 'Amina Magazine',
    image: '/images/celebrity/celeb-2.jpg',
    alt: 'Magazine cover editorial',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'celeb-3',
    category: 'Celebrity',
    type: 'Music Video',
    title: 'Artist Collaboration',
    image: '/images/celebrity/celeb-3.jpg',
    alt: 'Music video makeup',
    width: 'half',
    height: 'normal',
  },
  {
    id: 'celeb-4',
    category: 'Editorial',
    type: 'Fashion Spread',
    title: 'Vogue Africa SS24',
    image: '/images/celebrity/celeb-4.jpg',
    alt: 'Fashion editorial spread',
    width: 'half',
    height: 'normal',
  },
]

export const allWork = [...selectedWork, ...celebrityEditorial]