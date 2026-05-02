import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Globe, Cloud, Brain, Briefcase, Shield } from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Need custom software built right the first time? We engineer scalable, high-performance solutions from the ground up — architecture, development, and deployment all handled.',
    color: '#0466C8',
    glow: 'rgba(4,102,200,0.25)',
  },
  {
    icon: Globe,
    title: 'Web & Mobile Apps',
    description:
      'We build fast, polished web and mobile apps that users actually enjoy. Modern frameworks, clean code, and a relentless focus on conversion and retention.',
    color: '#00C6FF',
    glow: 'rgba(0,198,255,0.2)',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Move to the cloud or optimize what you already have on AWS, GCP, or Azure. We design architectures that are secure, resilient, and won\'t break the bank.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.22)',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description:
      'Stop doing manually what a machine can handle better. We build AI-powered tools and automation pipelines that cut costs, speed up workflows, and give you a real edge.',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.22)',
  },
  {
    icon: Briefcase,
    title: 'IT Consulting',
    description:
      'Not sure which tech stack is right for your next big bet? We give you straight-talk guidance to align your technology roadmap with your actual business goals.',
    color: '#0e87f0',
    glow: 'rgba(14,135,240,0.22)',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'One breach can cost you everything. We run comprehensive security audits, pen testing, and build a security-first culture into your engineering from day one.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.22)',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function ServiceCard({ icon: Icon, title, description, color, glow }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-dark-700/50 rounded-2xl p-6 border border-white/[0.06] hover:border-brand-600/25 overflow-hidden"
      style={{
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 20px 60px ${glow}, 0 4px 20px rgba(0,0,0,0.4)` }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Top gradient line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${color}18`, border: `1px solid ${color}28` }}
      >
        <Icon size={22} style={{ color }} />
      </div>

      <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-[1.75]">{description}</p>

      <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold" style={{ color }}>
        Learn More
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" ref={ref} className="relative section-padding bg-dark-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-5"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight mb-4"
          >
            Software Development &amp; <span className="text-gradient">Tech Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-slate-400 leading-relaxed"
          >
Everything from custom software and AI tools to cloud infrastructure and security — we handle the tech so you can focus on growing your business.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
