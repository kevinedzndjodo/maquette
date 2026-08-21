import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Eye } from 'lucide-react'
import { siteConfig, btnPrimary, btnSecondary } from '@/data/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0">
        <div className="image-reveal absolute inset-0">
          <img
            src="/images/hero-main.svg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/20 to-noir/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,10,10,0.3)_0%,_rgba(10,10,10,0.6)_70%)]" />
      </div>

      <div className="relative z-10 container-custom px-4 md:px-6">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-block font-sans text-caption uppercase tracking-widest text-champagne mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            MAKEUP ARTIST • BEAUTY EXPERT • EDUCATOR
          </motion.span>

          <motion.h1
            id="hero-title"
            className="font-serif text-display-xl text-ivoire font-medium tracking-tight leading-[1.05] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            FRED KENDRICK
          </motion.h1>

          <motion.p
            className="font-sans text-body-lg text-ivoire/90 max-w-2xl mx-auto mb-8 md:mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href="#work"
              className={`w-full sm:w-auto ${btnPrimary} border-ivoire text-ivoire hover:bg-ivoire hover:text-noir py-4 px-6 md:px-8 text-body-sm md:text-body-sm`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-5 h-5" aria-hidden="true" />
              VIEW MY WORK
            </motion.a>
            <motion.a
              href="#contact"
              className={`w-full sm:w-auto ${btnSecondary} border-ivoire/50 text-ivoire hover:bg-ivoire/10 hover:border-ivoire py-4 px-6 md:px-8 text-body-sm md:text-body-sm`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              BOOK A SESSION
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="w-px h-12 md:h-16 bg-ivoire/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="font-sans text-caption uppercase tracking-widest text-ivoire/50"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            SCROLL
          </motion.span>
          <ArrowRight className="w-5 h-5 text-ivoire/50" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}