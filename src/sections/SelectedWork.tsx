import { motion } from 'framer-motion'
import { selectedWork } from '@/data/work'
import { sectionTitle, sectionSubtitle, containerCustom } from '@/data/site'

export default function SelectedWork() {
  return (
    <section id="work" className="section bg-ivoire" aria-labelledby="work-title">
      <div className={containerCustom}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className={sectionSubtitle}>Selected Work</p>
          <h2 id="work-title" className={sectionTitle}>
            Portfolio
          </h2>
          <p className="font-sans text-body text-noir/60 mt-4">
            Une sélection de projets éditoriaux, mariages, beauté et collaborations artistiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8" role="list">
          {selectedWork.map((work, index) => (
            <motion.article
              key={work.id}
              role="listitem"
              className="relative group"
              style={{
                gridColumn: work.featured ? 'span 12 / span 7' : work.width === 'two-thirds' ? 'span 12 / span 8' : work.width === 'half' ? 'span 12 / span 6' : work.width === 'third' ? 'span 12 / span 4' : 'span 12',
                gridRow: work.featured ? 'span 2' : work.height === 'tall' ? 'span 2' : 'span 1',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
            >
              <div className="image-reveal relative aspect-[3/4] md:aspect-auto md:h-[340px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
                <img
                  src={work.image.replace('.jpg', '.svg')}
                  alt={work.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-ivoire">
                  <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-1">
                    {work.category}
                  </p>
                  <h3 className="font-serif text-display-sm md:text-display-md font-medium">
                    {work.title || work.type}
                  </h3>
                  <p className="font-sans text-body-sm text-ivoire/80 mt-1">
                    {work.type}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#work" className="font-sans text-body-sm uppercase tracking-wider text-noir link-underline inline-flex items-center gap-2">
            VIEW ALL WORK
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}