export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image?: string
  verified: boolean
  project?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marie K.',
    role: 'Mariée - Août 2024',
    content: 'Fred a sublimé mon mariage traditionnel et ma cérémonie civile. Il a su comprendre exactement ce que je voulais, respecter ma peau mate et me faire sentir magnifique. Professionnalisme absolu.',
    verified: true,
    project: 'Mariage Ngondo + Civil',
  },
  {
    id: 'test-2',
    name: 'Achille M.',
    role: 'Directeur Artistique - Canal 2\'Or',
    content: 'Travailler avec Fred sur les préparatifs des artistes est un gage de sérénité. Il gère la pression, les retouches entre passages, et livre toujours un travail impeccable. Un vrai pro.',
    verified: true,
    project: 'Canal 2\'Or Awards 2023',
  },
  {
    id: 'test-3',
    name: 'Sarah N.',
    role: 'Élève - Fondamentaux 2024',
    content: 'La formation "Fondamentaux" a transformé ma pratique. La pédagogie de Fred est claire, patiente, exigeante. Je repars avec des bases solides et la confiance pour me lancer. Merci !',
    verified: true,
    project: 'Formation Fondamentaux Pro',
  },
  {
    id: 'test-4',
    name: 'Photographe Studio',
    role: 'Collaborateur régulier',
    content: 'Le rendu peau de Fred est exceptionnel en shooting. Il comprend la lumière, anticipe les retouches, et ses maquillages tiennent des heures sous les flashs. Mon make-up artist de référence.',
    verified: true,
    project: 'Multiples editoriaux',
  },
  {
    id: 'test-5',
    name: '[Témoignage à venir]',
    role: 'Cliente privée',
    content: 'Placeholder — En attente de témoignage réel avec autorisation. Ne pas publier sans validation.',
    verified: false,
  },
  {
    id: 'test-6',
    name: '[Témoignage à venir]',
    role: 'Artiste / Influenceur',
    content: 'Placeholder — En attente de témoignage réel avec autorisation. Ne pas publier sans validation.',
    verified: false,
  },
]

export const verifiedTestimonials = testimonials.filter(t => t.verified)
export const placeholderTestimonials = testimonials.filter(t => !t.verified)