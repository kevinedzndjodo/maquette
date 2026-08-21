import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { navigation, siteConfig, btnPrimary } from '@/data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivoire/95 backdrop-blur-sm border-b border-nude/30' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#"
            className="font-serif text-display-sm font-medium text-noir link-underline"
            aria-label={`${siteConfig.name} - Accueil`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {siteConfig.name}
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-sans text-body-sm uppercase tracking-wider text-noir/80 hover:text-noir transition-colors link-underline"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={btnPrimary}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              BOOK NOW
            </motion.a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-noir"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <motion.div
          className="md:hidden overflow-hidden bg-ivoire border-t border-nude/30"
          initial={false}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="py-6 space-y-4 px-2">
            {navigation.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block font-sans text-body uppercase tracking-wider text-noir/80 hover:text-noir transition-colors py-2"
                onClick={() => setMobileOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={`block ${btnPrimary} text-center mt-4`}
              onClick={() => setMobileOpen(false)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              BOOK NOW
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}