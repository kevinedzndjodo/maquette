import { motion } from 'framer-motion'
import { celebrityEditorial } from '@/data/work'
import { containerCustom } from '@/data/site'

export default function CelebrityEditorial() {
  return (
    <section id="celebrity" className="section bg-noir text-ivoire" aria-labelledby="celeb-title">
      <div className={containerCustom}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">
            Celebrity & Editorial
          </p>
          <h2 id="celeb-title" className="font-serif text-display-lg font-medium tracking-tight text-ivoire">
            Collaborations
          </h2>
          <p className="font-sans text-body text-ivoire/60 mt-4">
            Sélection de collaborations vérifiables avec personnalités, médias et marques.
            <br className="hidden sm:block" />
            <span className="text-ivoire/40">(Placeholders — à remplacer par contenus réels avec autorisations)</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
          {celebrityEditorial.map((work, index) => (
            <motion.article
              key={work.id}
              role="listitem"
              className="relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="image-reveal aspect-[4/5]">
                <img
                  src={work.image.replace('.jpg', '.svg')}
                  alt={work.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-2">
                  {work.category}
                </p>
                <h3 className="font-serif text-display-sm font-medium text-ivoire mb-1">
                  {work.title}
                </h3>
                <p className="font-sans text-body-sm text-ivoire/70">
                  {work.type}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}