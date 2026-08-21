import { motion } from 'framer-motion'
import { verifiedTestimonials, placeholderTestimonials } from '@/data/testimonials'
import { containerCustom } from '@/data/site'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const allTestimonials = [...verifiedTestimonials, ...placeholderTestimonials]

  return (
    <section id="testimonials" className="section bg-noir text-ivoire" aria-labelledby="testimonials-title">
      <div className={containerCustom}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-caption uppercase tracking-widest text-champagne mb-4">
            Testimonials
          </p>
          <h2 id="testimonials-title" className="font-serif text-display-lg font-medium tracking-tight text-ivoire">
            What They Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {allTestimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              role="listitem"
              className={`relative p-8 border ${testimonial.verified ? 'border-nude/30 hover:border-champagne/50' : 'border-nude/20 bg-noir/50'} transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-champagne" aria-hidden="true" />
              </div>
              <blockquote className="relative z-10">
                <p className="font-sans text-body leading-relaxed text-ivoire/80 mb-6">
                  {testimonial.content}
                </p>
                <footer>
                  <p className="font-serif text-display-sm font-medium text-ivoire">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-body-sm text-ivoire/50 mt-1">
                    {testimonial.role}
                    {testimonial.project && <span className="mx-2">·</span>}
                    {testimonial.project && (
                      <span className="text-ivoire/40">{testimonial.project}</span>
                    )}
                  </p>
                  {!testimonial.verified && (
                    <p className="font-sans text-caption uppercase tracking-wider text-champagne/50 mt-3">
                      [PLACEHOLDER — À REMPLACER]
                    </p>
                  )}
                </footer>
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}