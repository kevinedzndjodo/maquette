import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site'
import { sectionTitle, sectionSubtitle, containerCustom, btnPrimary } from '@/data/site'
import { Instagram, ExternalLink } from 'lucide-react'

const instagramImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/work/editorial-${(i % 3) + 1}.svg`,
  alt: `Instagram post ${i + 1}`,
}))

export default function InstagramSection() {
  return (
    <section id="instagram" className="section bg-ivoire" aria-labelledby="instagram-title">
      <div className={containerCustom}>
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className={sectionSubtitle}>Social</p>
            <h2 id="instagram-title" className={sectionTitle}>
              Follow the Work
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-body uppercase tracking-wider text-noir link-underline group"
            >
              <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" aria-hidden="true" />
              {siteConfig.instagram}
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              SUIVRE SUR INSTAGRAM
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3" role="list" aria-label="Galerie Instagram">
          {instagramImages.map((img, index) => (
            <motion.div
              key={index}
              role="listitem"
              className="relative aspect-square group overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="image-reveal absolute inset-0">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-ivoire/10 backdrop-blur-sm rounded-full text-ivoire hover:bg-ivoire/20 transition-colors"
                  aria-label="Voir sur Instagram"
                >
                  <Instagram className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}