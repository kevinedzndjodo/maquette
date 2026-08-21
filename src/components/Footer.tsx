import { motion } from 'framer-motion'
import { siteConfig, navigation, containerCustom } from '@/data/site'
import { Instagram, Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-noir text-ivoire" role="contentinfo">
      <div className={containerCustom}>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 py-16 border-b border-nude/30">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="#" className="font-serif text-display-md font-medium text-ivoire block mb-6 link-underline">
              {siteConfig.name}
            </Link>
            <p className="font-sans text-body text-ivoire/60 max-w-xs leading-relaxed mb-8">
              Makeup Artist • Beauty Expert • Educator. Sublimer la beauté, créer la confiance.
            </p>
            <div className="flex items-center gap-6">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-ivoire/60 hover:text-champagne transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.nav initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">Navigation</h3>
            <ul className="space-y-3" role="list">
              {navigation.map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="font-sans text-body text-ivoire/70 hover:text-ivoire transition-colors link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {[
                'Bridal Makeup',
                'Makeup for Events',
                'Photoshoots',
                'Editorial Makeup',
                'Celebrity / Artist',
                'Personal Makeup',
              ].map(s => (
                <li key={s}>
                  <Link to="#services" className="font-sans text-body text-ivoire/70 hover:text-ivoire transition-colors link-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">Contact</h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-center gap-3 text-ivoire/70">
                <MapPin className="w-5 h-5 text-champagne" aria-hidden="true" />
                <span className="font-sans text-body">{siteConfig.location}</span>
              </li>
              <li className="flex items-center gap-3 text-ivoire/70">
                <Mail className="w-5 h-5 text-champagne" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="font-sans text-body hover:text-ivoire transition-colors link-underline">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-3 text-ivoire/70">
                <Phone className="w-5 h-5 text-champagne" aria-hidden="true" />
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-sans text-body hover:text-ivoire transition-colors link-underline">{siteConfig.phone}</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <motion.p className="font-sans text-body-sm text-ivoire/40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </motion.p>

          <motion.div className="flex items-center gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to="#contact" className="font-sans text-body-sm text-ivoire/60 hover:text-ivoire transition-colors link-underline">
              Mentions légales
            </Link>
            <Link to="#contact" className="font-sans text-body-sm text-ivoire/60 hover:text-ivoire transition-colors link-underline">
              Politique de confidentialité
            </Link>
            <Link to="#contact" className="font-sans text-body-sm text-ivoire/60 hover:text-ivoire transition-colors link-underline">
              CGV Formations
            </Link>
          </motion.div>

          <motion.button
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne hover:bg-champagne/20 transition-colors md:hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Retour en haut"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        </div>

      </div>
    </footer>
  )
}