import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Zap, Award, Headphones } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Users,
    number: '01',
    title: 'Expert Team',
    description:
      'Our engineers, designers, and strategists bring deep domain expertise and a passion for solving complex technical challenges.',
    color: '#0466C8',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Agile Delivery',
    description:
      'We ship fast without sacrificing quality. Our agile process keeps you in the loop at every sprint with transparent progress.',
    color: '#00C6FF',
  },
  {
    icon: Award,
    number: '03',
    title: 'Quality First',
    description:
      'Every line of code is reviewed, tested, and optimized. We hold ourselves to the highest standards so your users can rely on it.',
    color: '#8b5cf6',
  },
  {
    icon: Headphones,
    number: '04',
    title: '24/7 Support',
    description:
      "We're not just a vendor — we're a long-term partner. Dedicated support ensures your systems stay healthy and your team stays unblocked.",
    color: '#10b981',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-600/8 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-5"
          >
            Why IxonicTech
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight mb-4"
          >
            Why <span className="text-gradient">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-slate-400 leading-relaxed"
          >
            We don't just build software — we build partnerships. Here's what makes us different.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {HIGHLIGHTS.map(({ icon: Icon, number, title, description, color }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="relative group bg-dark-700/50 rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.1] overflow-hidden"
              style={{ transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 20px 50px ${color}22` }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-4 font-display text-5xl font-black opacity-[0.04] leading-none select-none"
                style={{ color }}
              >
                {number}
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon size={20} style={{ color }} />
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-[1.75]">{description}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent 10%, ${color}, transparent 90%)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
