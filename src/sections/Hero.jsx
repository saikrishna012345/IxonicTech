import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const CODE_LINES = [
  { parts: [{ t: 'const', c: '#00C6FF' }, { t: ' solution ', c: '#f8fafc' }, { t: '= IxonicTech', c: '#60a5fa' }, { t: '.build({', c: '#94a3b8' }] },
  { parts: [{ t: '  innovation', c: '#00C6FF' }, { t: ': ', c: '#94a3b8' }, { t: 'true', c: '#4ade80' }, { t: ',', c: '#94a3b8' }], indent: true },
  { parts: [{ t: '  quality', c: '#00C6FF' }, { t: ': ', c: '#94a3b8' }, { t: '"premium"', c: '#fb923c' }, { t: ',', c: '#94a3b8' }], indent: true },
  { parts: [{ t: '  speed', c: '#00C6FF' }, { t: ': ', c: '#94a3b8' }, { t: 'Infinity', c: '#c084fc' }, { t: ',', c: '#94a3b8' }], indent: true },
  { parts: [{ t: '});', c: '#94a3b8' }] },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-16">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-600/15 blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00C6FF]/8 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-brand-700/10 blur-[80px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(4,102,200,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(4,102,200,1) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        <div className="noise-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Content ── */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-600/25 text-brand-300 text-sm font-medium mb-7"
            >
              <Sparkles size={13} className="text-[#00C6FF]" />
              Est. May 2026 · Shipping from day one
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6"
            >
              Custom Software &amp;{' '}
              <span className="relative inline-block">
                <span className="text-gradient">AI Solutions</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 Q55 2 110 5 Q165 8 218 3"
                    stroke="url(#underlineGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underlineGrad" x1="0" y1="0" x2="220" y2="0">
                      <stop stopColor="#00C6FF" />
                      <stop offset="1" stopColor="#0466C8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              for Modern Business
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-slate-400 leading-[1.75] mb-10 max-w-[480px]"
            >
              We build custom software, web &amp; mobile apps, AI-powered tools, and cloud infrastructure that help your business move faster, cut costs, and stay ahead of the competition.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(4,102,200,0.5)] hover:shadow-[0_0_45px_rgba(4,102,200,0.7)] active:scale-[0.97]"
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-brand-600/50 text-slate-300 hover:text-white font-semibold transition-all duration-200 hover:bg-brand-600/5"
              >
                See Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-white/[0.06]"
            >
              {[
                { val: '1', label: 'Happy Client' },
                { val: 'Est. 2026', label: 'Year Founded' },
                { val: '100%', label: 'Delivery Rate' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-gradient">{s.val}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Animated code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Main card */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-glass rounded-2xl overflow-hidden glow-blue"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-dark-600/60 border-b border-brand-600/10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="flex-1 ml-2 h-5 bg-dark-500/50 rounded text-[11px] font-mono text-slate-500 flex items-center px-3">
                    ixonictech.config.js
                  </div>
                </div>
                {/* Code */}
                <div className="p-5 font-mono text-[13px] space-y-1.5">
                  <div className="text-slate-500 text-xs mb-3">// Building your vision</div>
                  {CODE_LINES.map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line.parts.map((p, j) => (
                        <span key={j} style={{ color: p.c }}>{p.t}</span>
                      ))}
                    </div>
                  ))}
                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/5">
                    <span className="text-green-400 text-sm">✓</span>
                    <span className="text-slate-300 text-xs">Solution deployed successfully</span>
                    <span className="ml-auto flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: Fast Delivery */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute -top-5 -right-5 bg-glass-light rounded-xl px-3.5 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-600/20 flex items-center justify-center text-base">🚀</div>
                  <div>
                    <div className="text-[11px] font-semibold text-white leading-none mb-0.5">On-Time Delivery</div>
                    <div className="text-[10px] text-slate-400">We ship when we say we will</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: Uptime */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-glass-light rounded-xl px-3.5 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00C6FF]/15 flex items-center justify-center text-base">⚡</div>
                  <div>
                    <div className="text-[11px] font-semibold text-white leading-none mb-0.5">99.9% Uptime</div>
                    <div className="text-[10px] text-slate-400">Rock-solid infrastructure</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
