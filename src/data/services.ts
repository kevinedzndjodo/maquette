export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    description: 'Maquillage de mariée sur-mesure pour votre jour J. Essai inclus, tenue longue durée, waterproof et photographique.',
    icon: 'sparkles',
    features: [
      'Essai maquillage inclus',
      'Maquillage jour J',
      'Retouches illimitées',
      'Kit retouche offert',
      'Déplacement sur lieu',
    ],
  },
  {
    id: 'events',
    title: 'Makeup for Events',
    description: 'Soirées, galas, anniversaires, remises de prix. Un look sophistiqué adapté à votre tenue et à l\'occasion.',
    icon: 'calendar',
    features: [
      'Consultation préalable',
      'Maquillage longue tenue',
      'Adapté à l\'éclairage',
      'Disponible week-ends',
    ],
  },
  {
    id: 'photoshoots',
    title: 'Photoshoots',
    description: 'Maquillage pour shootings photo : mode, portrait, corporate, beauté. Expertise lumière et rendu caméra.',
    icon: 'camera',
    features: [
      'Test lumière inclus',
      'Retouches entre takes',
      'Collaboration photographe',
      'Maquillage HD/4K ready',
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial Makeup',
    description: 'Créations artistiques pour magazines, campagnes mode, défilés. Avant-garde, conceptual, high-fashion.',
    icon: 'palette',
    features: [
      'Recherche créative',
      'Prototypage looks',
      'Equipe complète dispo',
      'Droits d\'image gérés',
    ],
  },
  {
    id: 'celebrity',
    title: 'Celebrity / Artist Makeup',
    description: 'Prestations VIP pour artistes, personnalités, influenceurs. Discrétion, rapidité, excellence garanties.',
    icon: 'star',
    features: [
      'Confidentialité totale',
      'Disponibilité 24/7',
      'Equipe dédiée',
      'Logistique gérée',
    ],
  },
  {
    id: 'personal',
    title: 'Personal Makeup',
    description: 'Leçon privée, relooking, conseil routine, analyse morphologie. Apprenez à vous sublimer au quotidien.',
    icon: 'user',
    features: [
      'Analyse visage/teint',
      'Cours automaquillage',
      'Routine personnalisée',
      'Shopping list produits',
    ],
  },
]