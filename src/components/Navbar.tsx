import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { navigation, siteConfig, btnPrimary } from '@/data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

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

          <div className="hidden md:flex items-center gap-8">
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

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-noir -ml-2"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden fixed inset-0 top-16 left-0 right-0 bottom-0 bg-ivoire border-t border-nude/30 z-40 flex flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              role="navigation"
              aria-label="Menu mobile"
            >
              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                <nav className="space-y-4" aria-label="Navigation mobile">
                  {navigation.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block font-sans text-body-lg uppercase tracking-wider text-noir/80 hover:text-noir transition-colors py-3 border-b border-nude/30"
                      onClick={closeMenu}
                      whileTap={{ scale: 0.98 }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
                <motion.a
                  href="#contact"
                  className={`block ${btnPrimary} text-center py-4 mt-4`}
                  onClick={closeMenu}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  BOOK NOW
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-30 bg-noir/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}