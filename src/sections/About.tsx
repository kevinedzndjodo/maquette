import { motion } from 'framer-motion'
import { sectionTitle, sectionSubtitle, containerCustom } from '@/data/site'

export default function About() {
  const aboutText = `Fred Kendrick est un maquilleur professionnel basé à Yaoundé, Cameroun. 
Son approche allie expertise technique, sensibilité artistique et compréhension profonde des peaux mates et foncées.

Spécialisé dans le maquillage éditorial, la mariée (traditionnelle & moderne), le celebrity makeup et la formation, il collabore régulièrement avec photographes, magazines, maisons de production et artistes.

Sa vision : sublimer sans transformer, révéler la beauté unique de chaque visage.`

  return (
    <section id="about" className="section bg-ivoire" aria-labelledby="about-title">
      <div className={containerCustom}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[5/6] relative overflow-hidden">
              <div className="image-reveal absolute inset-0">
                <img
                  src="/images/about/portrait.svg"
                  alt="Fred Kendrick - Portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-champagne p-6 md:p-8 max-w-xs text-center">
              <p className="font-serif text-display-sm text-noir font-medium">
                10+
              </p>
              <p className="font-sans text-caption uppercase tracking-wider text-noir/70 mt-1">
                Années d'expérience
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pt-12 lg:pt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className={sectionSubtitle}>The Artist</p>
            <h2 id="about-title" className={sectionTitle} style={{ maxWidth: '40ch' }}>
              Behind the Look
            </h2>

            <div className="mt-8 space-y-6 text-noir/80">
              {aboutText.split('\n\n').map((paragraph, i) => (
                <motion.p
                  key={i}
                  className="font-sans text-body-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { label: 'Clients satisfaits', value: '500+' },
                { label: 'Mariées sublimées', value: '200+' },
                { label: 'Élèves formés', value: '150+' },
                { label: 'Éditoriaux publiés', value: '30+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 border border-nude/50">
                  <p className="font-serif text-display-md text-noir font-medium">{stat.value}</p>
                  <p className="font-sans text-caption uppercase tracking-wider text-noir/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}