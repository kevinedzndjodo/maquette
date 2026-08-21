import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { getTrainingBySlug } from '@/data/trainings'
import { containerCustom, btnSecondary } from '@/data/site'
import { ArrowLeft, Users, Clock, MapPin, Calendar, Check } from 'lucide-react'

export default function TrainingDetail() {
  const { slug } = useParams<{ slug: string }>()
  const training = getTrainingBySlug(slug || '')

  if (!training) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivoire">
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-serif text-display-lg text-noir mb-4">Formation non trouvée</h1>
          <Link to="/academy" className="inline-flex items-center gap-2 text-champagne link-underline">
            <ArrowLeft className="w-5 h-5" />
            RETOUR AUX FORMATIONS
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end" aria-labelledby="training-title">
        <div className="absolute inset-0 z-0">
          <div className="image-reveal absolute inset-0">
            <img src={training.image} alt={training.name} className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/40 to-transparent" />
        </div>

        <div className="relative z-10 container-custom pb-16">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/academy" className="inline-flex items-center gap-2 font-sans text-body-sm uppercase tracking-wider text-ivoire/80 hover:text-ivoire transition-colors mb-6 link-underline">
              <ArrowLeft className="w-4 h-4" />
              RETOUR
            </Link>
            <span className="inline-block bg-champagne text-noir px-4 py-1 font-sans text-caption uppercase tracking-wider font-medium mb-4">
              {training.level}
            </span>
            <h1 id="training-title" className="font-serif text-display-xl text-ivoire font-medium tracking-tight mb-4">
              {training.name}
            </h1>
            <p className="font-sans text-body-lg text-ivoire/80 mb-8 leading-relaxed">
              {training.longDescription || training.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-ivoire/80">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-champagne" />
                <span className="font-sans text-body-sm">{training.maxStudents} élèves max</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-champagne" />
                <span className="font-sans text-body-sm">{training.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-champagne" />
                <span className="font-sans text-body-sm">{training.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-champagne" />
                <span className="font-sans text-body-sm">{training.nextSession}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-ivoire" aria-labelledby="details-title">
        <div className={containerCustom}>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div className="lg:col-span-2 space-y-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div>
                <h2 id="details-title" className="font-serif text-display-lg font-medium text-noir mb-6">
                  Ce que vous allez apprendre
                </h2>
                <ul className="space-y-3" role="list">
                  {training.whatYouLearn.map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3 font-sans text-body text-noir/80" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                      <Check className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-display-lg font-medium text-noir mb-6">
                  Programme détaillé
                </h2>
                <div className="space-y-6" role="list">
                  {training.curriculum.map((module, i) => (
                    <motion.article key={i} className="border border-nude/50 p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                      <h3 className="font-serif text-display-sm font-medium text-noir mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full border border-nude/50 flex items-center justify-center font-sans text-body-sm text-noir/60">
                          {i + 1}
                        </span>
                        {module.module}
                      </h3>
                      <ul className="space-y-2 pl-10" role="list">
                        {module.topics.map((topic, j) => (
                          <li key={j} className="font-sans text-body text-noir/70 flex items-center gap-2 relative">
                            <span className="w-1.5 h-1.5 rounded-full bg-champagne absolute -left-10 top-1/2 -translate-y-1/2" aria-hidden="true" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-display-lg font-medium text-noir mb-6">
                  Informations pratiques
                </h2>
                <ul className="space-y-3" role="list">
                  {training.practicalInfo.map((info, i) => (
                    <motion.li key={i} className="flex items-start gap-3 font-sans text-body text-noir/80" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                      <Check className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {info}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.aside className="bg-noir text-ivoire p-8 lg:p-10 sticky top-24 h-fit" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h3 className="font-serif text-display-md font-medium text-ivoire mb-6">
                Inscription
              </h3>
              <div className="space-y-4 mb-8 pb-8 border-b border-nude/30">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-body text-ivoire/70">Tarif</span>
                  <span className="font-serif text-display-sm font-medium text-champagne">
                    {training.price.toLocaleString()} {training.currency}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-body text-ivoire/70">Places disponibles</span>
                  <span className="font-sans text-body font-medium text-ivoire">{training.maxStudents}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-body text-ivoire/70">Prochaine session</span>
                  <span className="font-sans text-body font-medium text-ivoire">{training.nextSession}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-body text-ivoire/70">Lieu</span>
                  <span className="font-sans text-body font-medium text-ivoire text-right max-w-[60%]">{training.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-champagne text-noir px-6 py-4 font-sans text-body-sm font-medium uppercase tracking-wider hover:bg-champagne-light transition-colors">
                  RÉSERVER MA PLACE
                </button>
                <a href="#contact" className={`w-full block text-center ${btnSecondary}`}>
                  POSER UNE QUESTION
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-nude/30">
                <p className="font-sans text-body-sm text-ivoire/60 leading-relaxed">
                  <strong className="text-ivoire">Prêt à commencer ?</strong><br />
                  Les places sont limitées pour garantir un encadrement personnalisé.
                  Réservez dès maintenant ou contactez-nous pour plus d'informations.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}