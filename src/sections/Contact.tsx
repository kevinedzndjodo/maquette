import { motion } from 'framer-motion'
import { useState } from 'react'
import { siteConfig } from '@/data/site'
import { services } from '@/data/services'
import { containerCustom, btnPrimary } from '@/data/site'
import { Send, MessageSquare, Phone, Mail, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="section bg-noir text-ivoire" aria-labelledby="contact-title">
      <div className={containerCustom}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">
              Contact
            </p>
            <h2 id="contact-title" className="font-serif text-display-lg font-medium tracking-tight text-ivoire mb-8">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="font-sans text-body-lg text-ivoire/70 leading-relaxed mb-12">
              Vous avez un projet, une question sur nos formations, ou souhaitez réserver une prestation ?
              Remplissez le formulaire ou contactez-nous directement.
            </p>

            <div className="space-y-6 border-t border-nude/30 pt-8">
              {[
                { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: 'WhatsApp', value: siteConfig.phone, href: `https://wa.me/${siteConfig.whatsapp}` },
                { icon: Calendar, label: 'Localisation', value: siteConfig.location, href: '#' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 font-sans text-body text-ivoire/70 hover:text-ivoire transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full border border-nude/30 flex items-center justify-center group-hover:border-champagne/50 transition-colors">
                    <item.icon className="w-5 h-5 text-champagne" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-caption uppercase tracking-wider text-ivoire/50">{item.label}</p>
                    <p className="font-sans text-body">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 w-fit bg-[#25D366] text-white px-8 py-4 font-sans text-body-sm font-medium hover:bg-[#128C7E] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              CONTACTER PAR WHATSAPP
            </motion.a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-ivoire p-8 lg:p-12 rounded-none"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-sans text-caption uppercase tracking-wider text-noir/60 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-nude/50 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20 font-sans text-body text-noir placeholder:text-noir/30 transition-all"
                  placeholder="Votre nom"
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-caption uppercase tracking-wider text-noir/60 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-nude/50 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20 font-sans text-body text-noir placeholder:text-noir/30 transition-all"
                  placeholder="votre@email.com"
                  disabled={status === 'submitting'}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block font-sans text-caption uppercase tracking-wider text-noir/60 mb-2">
                  Téléphone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-nude/50 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20 font-sans text-body text-noir placeholder:text-noir/30 transition-all"
                  placeholder="+237 XX XX XX XX"
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="service" className="block font-sans text-caption uppercase tracking-wider text-noir/60 mb-2">
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-nude/50 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20 font-sans text-body text-noir transition-all appearance-none"
                  disabled={status === 'submitting'}
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((s: typeof services[0]) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                  <option value="autre">Autre / Information formations</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="date" className="block font-sans text-caption uppercase tracking-wider text-noir/60 mb-2">
                Date préférée (optionnel)
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-nude/50 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20 font-sans text-body text-noir transition-all"
                disabled={status === 'submitting'}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block font-sans text-caption uppercase tracking-wider text-noir/60 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-nude/50 focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20 font-sans text-body text-noir placeholder:text-noir/30 transition-all resize-none"
                placeholder="Décrivez votre projet, vos besoins, vos questions..."
                disabled={status === 'submitting'}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full ${btnPrimary} py-4 disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  ENVOI EN COURS...
                </>
              ) : status === 'success' ? (
                <>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MESSAGE ENVOYÉ !
                </>
              ) : (
                <>
                  SEND INQUIRY
                  <Send className="w-5 h-5" aria-hidden="true" />
                </>
              )}
            </motion.button>

            <p className="font-sans text-caption text-noir/40 text-center mt-6">
              En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}