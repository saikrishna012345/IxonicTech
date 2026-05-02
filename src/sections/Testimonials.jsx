import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Indu Mart',
    role: 'Founder & CEO',
    company: 'Indu Mart',
    avatar: 'https://placehold.co/80x80/f97316/ffffff?text=IM',
    rating: 5,
    quote:
      'IxonicTech built our entire B2B marketplace from scratch using React and the MERN stack. The platform is blazing fast, scales without breaking a sweat, and hit every requirement our buyers and suppliers had. Couldn\'t ask for a better tech partner.',
  },
  // {
  //   name: 'Sarah Mitchell',
  //   role: 'CTO',
  //   company: 'NovaPay Inc.',
  //   avatar: 'https://placehold.co/80x80/0466C8/ffffff?text=SM',
  //   rating: 5,
  //   quote:
  //     'IxonicTech completely transformed our payment infrastructure. The team was professional, responsive, and delivered beyond what we expected. Our transaction speeds improved by 3x.',
  // },
  // {
  //   name: 'James Okafor',
  //   role: 'Founder & CEO',
  //   company: 'MedSync Health',
  //   avatar: 'https://placehold.co/80x80/00C6FF/ffffff?text=JO',
  //   rating: 5,
  //   quote:
  //     'From day one, IxonicTech understood our vision. They built a HIPAA-compliant telemedicine platform in record time. Their attention to detail and quality is unmatched.',
  // },
  // {
  //   name: 'Priya Sharma',
  //   role: 'VP Engineering',
  //   company: 'Lynk Commerce',
  //   avatar: 'https://placehold.co/80x80/8b5cf6/ffffff?text=PS',
  //   rating: 5,
  //   quote:
  //     'Working with IxonicTech felt like having an in-house team that actually cared. The AI-powered demand forecasting system they built saves us hundreds of hours every month.',
  // },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const COLORS = ['#0466C8', '#00C6FF', '#8b5cf6', '#f97316']

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-5"
          >
            Client Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight mb-4"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-slate-400 leading-relaxed"
          >
Don't just take our word for it — here's what our clients have to say.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex justify-center"
        >
          {TESTIMONIALS.map(({ name, role, company, avatar, rating, quote }, i) => (
            <motion.div
              key={name}
              variants={cardVariant}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="relative group bg-dark-700/50 rounded-2xl p-8 border border-white/[0.06] hover:border-white/[0.1] overflow-hidden w-full max-w-xl"
              style={{ transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 20px 50px ${COLORS[i]}20` }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Quote icon */}
              <Quote
                size={36}
                className="absolute top-5 right-5 opacity-[0.06]"
                style={{ color: COLORS[i] }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-[1.8] mb-6 relative z-10">"{quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <img
                  src={avatar}
                  alt={`${name} — ${company}`}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full ring-2"
                  style={{ ringColor: `${COLORS[i]}40` }}
                />
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{role} · {company}</div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent 10%, ${COLORS[i]}, transparent 90%)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
