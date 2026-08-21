import { motion } from 'framer-motion'
import { trainings, getFeaturedTraining } from '@/data/trainings'
import { sectionTitle, containerCustom, btnPrimary, btnSecondary } from '@/data/site'
import { ArrowRight, Users, Clock, MapPin, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Academy() {
  const featured = getFeaturedTraining()

  return (
    <section id="academy" className="section bg-ivoire" aria-labelledby="academy-title">
      <div className={containerCustom}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">
            Makeup Academy
          </p>
          <h2 id="academy-title" className={sectionTitle}>
            Formations Professionnelles
          </h2>
          <p className="font-serif text-display-sm font-medium text-noir/60 mt-4 mb-2" style={{ fontStyle: 'italic' }}>
            LEARN. PRACTICE. CREATE.
          </p>
          <p className="font-sans text-body text-noir/60 mt-4">
            Des formations complètes pour maîtriser l'art du maquillage professionnel,
            du niveau débutant à l'expertise éditoriale.
          </p>
        </motion.div>

        {featured && (
          <motion.article
            className="relative overflow-hidden mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px] md:min-h-[400px]">
                <div className="image-reveal absolute inset-0">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-noir/20 to-transparent" />
              </div>
              <div className="p-6 md:p-10 lg:p-16 bg-noir text-ivoire flex flex-col justify-center">
                <span className="font-sans text-caption uppercase tracking-widest text-champagne mb-3 inline-block">
                  Formation vedette
                </span>
                <h3 className="font-serif text-display-sm md:text-display-lg font-medium tracking-tight mb-4">
                  {featured.name}
                </h3>
                <p className="font-sans text-body md:text-body-lg text-ivoire/80 mb-6 md:mb-8 leading-relaxed">
                  {featured.description}
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-3 text-ivoire/70">
                    <Users className="w-5 h-5 text-champagne flex-shrink-0" aria-hidden="true" />
                    <span className="font-sans text-body-sm md:text-body">{featured.maxStudents} élèves max</span>
                  </div>
                  <div className="flex items-center gap-3 text-ivoire/70">
                    <Clock className="w-5 h-5 text-champagne flex-shrink-0" aria-hidden="true" />
                    <span className="font-sans text-body-sm md:text-body">{featured.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-ivoire/70">
                    <MapPin className="w-5 h-5 text-champagne flex-shrink-0" aria-hidden="true" />
                    <span className="font-sans text-body-sm md:text-body">{featured.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-ivoire/70">
                    <Award className="w-5 h-5 text-champagne flex-shrink-0" aria-hidden="true" />
                    <span className="font-sans text-body-sm md:text-body">{featured.level}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link
                    to={`/academy/${featured.slug}`}
                    className={`w-full sm:w-auto ${btnPrimary} py-4 px-6 md:px-8 text-center`}
                  >
                    DÉTAILS & INSCRIPTION
                    <ArrowRight className="w-5 h-5 inline-block ml-2" aria-hidden="true" />
                  </Link>
                  <a href="#contact" className={`w-full sm:w-auto ${btnSecondary} py-4 px-6 md:px-8 text-center`}>
                    POSER UNE QUESTION
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-champagne text-noir px-3 md:px-4 py-1 font-sans text-caption uppercase tracking-wider font-medium">
              PROCHAINE SESSION : {featured.nextSession.toUpperCase()}
            </div>
          </motion.article>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-serif text-display-md font-medium text-center mb-10 md:mb-12">
            Autres formations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" role="list">
            {trainings.filter(t => t.id !== featured?.id).map((training, index) => (
              <motion.article
                key={training.id}
                role="listitem"
                className="group relative bg-white border border-nude/50 hover:border-champagne/50 transition-colors duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 text-champagne text-caption uppercase tracking-wider mb-3">
                    <Award className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    {training.level}
                  </div>
                  <h3 className="font-serif text-display-sm font-medium text-noir mb-3 group-hover:text-champagne transition-colors">
                    {training.name}
                  </h3>
                  <p className="font-sans text-body-sm text-noir/60 mb-4 line-clamp-2">
                    {training.description}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 text-body-sm text-noir/50 mb-4">
                    <span className="flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {training.duration}
                    </span>
                    <span className="flex items-center gap-1 flex-shrink-0">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      {training.nextSession}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-nude/30">
                    <span className="font-serif text-display-sm font-medium text-noir">
                      {training.price.toLocaleString()} {training.currency}
                    </span>
                    <Link
                      to={`/academy/${training.slug}`}
                      className="font-sans text-body-sm uppercase tracking-wider text-champagne link-underline group-hover:opacity-100"
                    >
                      EN SAVOIR PLUS
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="inline-flex items-center gap-2">
            <span className={btnPrimary}>
              JOIN THE NEXT CLASS
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}