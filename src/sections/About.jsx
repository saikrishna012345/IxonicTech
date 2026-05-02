import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Lightbulb, TrendingUp } from 'lucide-react'

const STATS = [
  { val: '1', label: 'Satisfied Client' },
  { val: 'May 2026', label: 'Founded' },
  { val: 'MERN', label: 'Core Stack' },
  { val: '100%', label: 'Delivery Rate' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="relative section-padding bg-dark-800 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-5">
              About IxonicTech
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight mb-5">
              We build tech that{' '}
              <span className="text-gradient">drives results</span>{' '}
              — period.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 leading-[1.8] mb-4">
              IxonicTech is an innovative tech startup providing end-to-end software development and digital services
              for businesses ready to grow. Launched in May 2026, we combine sharp technical execution with a genuine
              commitment to client success.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-400 leading-[1.8] mb-10">
              We currently serve InduMart — a full-scale B2B marketplace we designed and built from scratch — and we're
              actively expanding. Every engagement we take on receives the same focused attention and quality-first approach.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {STATS.map(({ val, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="bg-dark-700/60 px-6 py-5"
                >
                  <div className="font-display text-2xl lg:text-3xl font-bold text-gradient mb-1">{val}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-5"
          >
            {/* Company overview card */}
            <motion.div variants={fadeUp} className="bg-glass rounded-2xl p-6 border border-brand-600/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-brand-600/15 flex items-center justify-center">
                  <TrendingUp size={20} className="text-brand-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">Who We Are</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A tight-knit team of engineers, designers, and strategists who are serious about shipping great software.
                    We move fast, sweat the details, and deliver work we're proud of.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div variants={fadeUp} className="bg-glass rounded-2xl p-6 border border-brand-600/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#00C6FF]/10 flex items-center justify-center">
                  <Target size={20} className="text-[#00C6FF]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">Our Mission</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    To help businesses win through technology — building scalable, reliable software that solves real problems, saves real time, and generates real revenue.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUp} className="bg-glass rounded-2xl p-6 border border-brand-600/10 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Lightbulb size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">Our Vision</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    To be the go-to tech partner for ambitious companies worldwide — the team you call when you need it done right, on time, and built to last.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
