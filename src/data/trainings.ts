export interface Training {
  id: string
  name: string
  slug: string
  description: string
  longDescription?: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Pro'
  duration: string
  nextSession: string
  location: string
  maxStudents: number
  price: string
  currency: 'XAF' | 'EUR'
  whatYouLearn: string[]
  curriculum: { module: string; topics: string[] }[]
  practicalInfo: string[]
  featured?: boolean
  image: string
}

export const trainings: Training[] = [
  {
    id: 'training-1',
    name: 'Fondamentaux du Maquillage Pro',
    slug: 'fondamentaux-maquillage-pro',
    description: 'Maîtrisez les bases techniques du maquillage professionnel : peau, morphologie, colorimétrie, hygiène. La fondation solide pour débuter.',
    longDescription: 'Cette formation intensive de 5 jours vous donne toutes les clés techniques pour réaliser un maquillage professionnel complet. De la préparation de peau aux techniques de correction, en passant par la maîtrise des outils et l\'hygiène professionnelle.',
    level: 'Débutant',
    duration: '5 jours (35h)',
    nextSession: 'Mars 2025',
    location: 'Yaoundé - Studio FK',
    maxStudents: 12,
    price: '250 000',
    currency: 'XAF',
    featured: true,
    image: '/images/training/fondamentaux.jpg',
    whatYouLearn: [
      'Analyse de peau & préparation',
      'Théorie des couleurs & colorimétrie',
      'Morphologie visage & corrections',
      'Techniques fond de teint (pinceau, éponge, airbrush)',
      'Sourcils : structure & dessin',
      'Yeux : dégradés, eyeliner, faux-cils',
      'Lèvres : contour, tenue, corrections',
      'Maquillage jour / soir / mariée base',
      'Hygiène & déontologie pro',
      'Kit pro : composition & entretien',
    ],
    curriculum: [
      {
        module: 'Jour 1 : Fondations & Peau',
        topics: ['Anatomie cutanée', 'Diagnostic peau', 'Préparation & skincare', 'Fond de teint : théorie & pratique'],
      },
      {
        module: 'Jour 2 : Structure & Correction',
        topics: ['Morphologie visages', 'Corrections chromatiques', 'Contouring / Highlighting', 'Sourcils : architecture'],
      },
      {
        module: 'Jour 3 : Regard & Techniques',
        topics: ['Anatomie œil', 'Dégradés : techniques', 'Eyeliner : styles', 'Faux-cils : pose'],
      },
      {
        module: 'Jour 4 : Looks Complets',
        topics: ['Maquillage jour naturel', 'Maquillage soir sophistiqué', 'Base mariée', 'Retouches & tenue'],
      },
      {
        module: 'Jour 5 : Évaluation & Pro',
        topics: ['Examen pratique', 'Débriefing personnalisé', 'Portfolio : premiers pas', 'Lancer son activité'],
      },
    ],
    practicalInfo: [
      'Matériel fourni : kit pinceaux + produits',
      'Support de cours complet (PDF + imprimé)',
      'Attestation de fin de formation',
      'Accès groupe alumni WhatsApp',
      'Réduction 10% sur formations suivantes',
      'Pause déjeuner incluse',
    ],
  },
  {
    id: 'training-2',
    name: 'Maquillage Mariée Expert',
    slug: 'maquillage-mariee-expert',
    description: 'Spécialisation mariée : essais, gestion du stress, waterproof, tenues extrêmes, peaux mates/noires, traditionnelles & modernes.',
    level: 'Intermédiaire',
    duration: '3 jours (21h)',
    nextSession: 'Avril 2025',
    location: 'Yaoundé - Studio FK',
    maxStudents: 8,
    price: '300 000',
    currency: 'XAF',
    image: '/images/training/mariee.jpg',
    whatYouLearn: [
      'Consultation & contrat mariée',
      'Essai : méthode & validation',
      'Peaux foncées & mates : expertise',
      'Maquillage traditionnel (toghu, ndop)',
      'Waterproof & tenue 18h+',
      'Gestion émotions & retouches J',
      'Kit mariée & organisation',
      'Tarification & business mariée',
    ],
    curriculum: [
      {
        module: 'Jour 1 : Expertise Mariée',
        topics: ['Psychologie mariée', 'Essai : process complet', 'Peaux noires/mates : spécificités', 'Traditionnel vs Moderne'],
      },
      {
        module: 'Jour 2 : Technique Avancée',
        topics: ['Teint HD waterproof', 'Yeux : tenue extrême', 'Lèvres : zéro transfert', 'Fixation pro'],
      },
      {
        module: 'Jour 3 : Business & Pratique',
        topics: ['Simulation jour J', 'Tarifs & packages', 'Contrats & légal', 'Marketing mariée'],
      },
    ],
    practicalInfo: [
      'Prérequis : Fondamentaux ou expérience pro',
      'Modèles réelles pour pratique',
      'Dossier technique mariée offert',
      'Certificat spécialisation',
    ],
  },
  {
    id: 'training-3',
    name: 'Editorial & Creative Makeup',
    slug: 'editorial-creative-makeup',
    description: 'Développez votre signature artistique. Avant-garde, mode, défilés, campagnes. Du concept à la réalisation éditoriale.',
    level: 'Avancé',
    duration: '4 jours (28h)',
    nextSession: 'Mai 2025',
    location: 'Yaoundé - Studio FK',
    maxStudents: 10,
    price: '350 000',
    currency: 'XAF',
    image: '/images/training/editorial.jpg',
    whatYouLearn: [
      'Recherche d\'inspiration & moodboard',
      'Création concept & storytelling',
      'Techniques avant-garde',
      'Matériaux non-conventionnels',
      'Collaboration photographe/styliste',
      'Direction artistique',
      'Portfolio éditorial',
      'Pitch & publication',
    ],
    curriculum: [
      {
        module: 'Jour 1 : Concept & Recherche',
        topics: ['Analyse références', 'Création moodboard', 'Storytelling visuel', 'Croquis & planches'],
      },
      {
        module: 'Jour 2 : Techniques Expérimentales',
        topics: ['Peinture visage/corps', 'Textures & matériaux', 'Prothèses légères', 'Effets spéciaux beauté'],
      },
      {
        module: 'Jour 3 : Réalisation Shooting',
        topics: ['Direction modèle', 'Gestion lumière', 'Retouches continuité', 'Shooting réel pro'],
      },
      {
        module: 'Jour 4 : Finalisation & Carrière',
        topics: ['Sélection & retouche', 'Book éditorial', 'Approche magazines', 'Positionnement artiste'],
      },
    ],
    practicalInfo: [
      'Prérequis : Niveau intermédiaire confirmé',
      'Shooting pro avec photographe inclus',
      'Images HD pour portfolio fournies',
      'Certificat spécialisation',
      'Mise en relation réseau pro',
    ],
  },
  {
    id: 'training-4',
    name: 'Airbrush & HD Makeup Masterclass',
    slug: 'airbrush-hd-masterclass',
    description: 'Maîtrisez l\'aérographe pour teint zéro défaut, TV, cinéma, HD/4K/8K. Technique incontournable du pro moderne.',
    level: 'Pro',
    duration: '2 jours (14h)',
    nextSession: 'Juin 2025',
    location: 'Yaoundé - Studio FK',
    maxStudents: 6,
    price: '200 000',
    currency: 'XAF',
    image: '/images/training/airbrush.jpg',
    whatYouLearn: [
      'Matériel & entretien aérographe',
      'Produits : bases, nuances, fixateurs',
      'Technique : pression, distance, mouvement',
      'Teint HD/4K : couverture invisible',
      'Corrections ciblées précises',
      'Body painting & tatouage éphémère',
      'Hygiène & décontamination',
      'Rentabilité & tarification',
    ],
    curriculum: [
      {
        module: 'Jour 1 : Maîtrise Technique',
        topics: ['Équipement & setup', 'Exercices contrôle', 'Fond de teint aérographe', 'Corrections & contouring'],
      },
      {
        module: 'Jour 2 : Application Pro',
        topics: ['Teint caméra prêt', 'Corps & body', 'Résolution problèmes', 'Business airbrush'],
      },
    ],
    practicalInfo: [
      'Prérequis : Expérience pro confirmée',
      'Aérographe fourni pendant formation',
      'Option achat kit pro préférentiel',
      'Certificat masterclass',
    ],
  },
]

export const getTrainingBySlug = (slug: string) => trainings.find(t => t.slug === slug)
export const getFeaturedTraining = () => trainings.find(t => t.featured) || trainings[0]