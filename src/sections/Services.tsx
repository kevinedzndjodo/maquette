import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { containerCustom } from '@/data/site'
import { Sparkles, Calendar, Camera, Palette, Star, User } from 'lucide-react'

const getIcon = (name: string) => {
  switch (name) {
    case 'sparkles': return Sparkles
    case 'calendar': return Calendar
    case 'camera': return Camera
    case 'palette': return Palette
    case 'star': return Star
    case 'user': return User
    default: return Sparkles
  }
}

export default function Services() {
  return (
    <section id="services" className="section bg-noir text-ivoire" aria-labelledby="services-title">
      <div className={containerCustom}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">
            Services
          </p>
          <h2 id="services-title" className="font-serif text-display-lg font-medium tracking-tight text-ivoire">
            Prestations
          </h2>
          <p className="font-sans text-body text-ivoire/60 mt-4">
            Des services sur-mesure adaptés à chaque occasion et chaque besoin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.article
                key={service.id}
                role="listitem"
                className="group relative p-8 border border-nude/30 hover:border-champagne/50 transition-colors duration-300 bg-noir/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/20 transition-colors">
                    <Icon className="w-7 h-7 text-champagne" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-display-sm font-medium text-ivoire mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-body text-ivoire/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 font-sans text-body-sm text-ivoire/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne/50 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="#contact"
                      className="font-sans text-body-sm uppercase tracking-wider text-champagne link-underline inline-flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      BOOK / INQUIRE
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}