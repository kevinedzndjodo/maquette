import { motion } from 'framer-motion'
import { selectedWork } from '@/data/work'
import { sectionTitle, sectionSubtitle, containerCustom } from '@/data/site'

export default function SelectedWork() {
  const gridItems = [
    { id: 'work-1', span: 'col-span-12 lg:col-span-7 row-span-2', className: 'h-[600px] lg:h-[700px]' },
    { id: 'work-2', span: 'col-span-6 lg:col-span-5 row-span-1', className: 'h-[340px] lg:h-[400px]' },
    { id: 'work-3', span: 'col-span-6 lg:col-span-5 row-span-1', className: 'h-[340px] lg:h-[400px]' },
    { id: 'work-4', span: 'col-span-12 lg:col-span-7 row-span-2', className: 'h-[600px] lg:h-[700px]' },
    { id: 'work-5', span: 'col-span-4 lg:col-span-3 row-span-2', className: 'h-[600px] lg:h-[700px]' },
    { id: 'work-6', span: 'col-span-6 lg:col-span-5 row-span-1', className: 'h-[340px] lg:h-[400px]' },
    { id: 'work-7', span: 'col-span-6 lg:col-span-5 row-span-1', className: 'h-[340px] lg:h-[400px]' },
    { id: 'work-8', span: 'col-span-12 lg:col-span-7 row-span-1', className: 'h-[400px] lg:h-[450px]' },
    { id: 'work-9', span: 'col-span-4 lg:col-span-3 row-span-1', className: 'h-[280px] lg:h-[320px]' },
  ]

  return (
    <section id="work" className="section bg-ivoire" aria-labelledby="work-title">
      <div className={containerCustom}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
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

        <div className="grid grid-cols-12 gap-4 lg:gap-6" role="list">
          {gridItems.map((item, index) => {
            const work = selectedWork.find(w => w.id === item.id)
            if (!work) return null

            return (
              <motion.article
                key={item.id}
                className={`${item.span} ${item.className} relative group`}
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
              >
                <div className="image-reveal relative w-full h-full">
                  <img
                    src={work.image.replace('.jpg', '.svg')}
                    alt={work.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-ivoire">
                    <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-1">
                      {work.category}
                    </p>
                    <h3 className="font-serif text-display-sm font-medium">
                      {work.title || work.type}
                    </h3>
                    <p className="font-sans text-body-sm text-ivoire/80 mt-1">
                      {work.type}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
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