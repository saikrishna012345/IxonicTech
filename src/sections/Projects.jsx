import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Indu Mart',
    description: 'A full-featured B2B industrial marketplace connecting suppliers and buyers with real-time inventory, order management, and secure transactions.',
    image: 'https://placehold.co/640x400/0d1117/f97316?text=InduMart',
    tags: ['React.js', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    category: 'B2B Marketplace',
    accent: '#f97316',
  },
  // {
  //   title: 'FinFlow Dashboard',
  //   description: 'A real-time financial analytics platform with AI-powered forecasting and custom reporting for enterprise finance teams.',
  //   image: 'https://placehold.co/640x400/0d1a2e/0466C8?text=FinFlow',
  //   tags: ['React', 'Node.js', 'PostgreSQL', 'AI/ML'],
  //   category: 'FinTech',
  //   accent: '#0466C8',
  // },
  // {
  //   title: 'HealthTrack Pro',
  //   description: 'Telemedicine and patient management system with HIPAA-compliant infrastructure and real-time video consultation.',
  //   image: 'https://placehold.co/640x400/0d1a2e/00C6FF?text=HealthTrack',
  //   tags: ['React Native', 'Python', 'AWS', 'WebRTC'],
  //   category: 'HealthTech',
  //   accent: '#00C6FF',
  // },
  // {
  //   title: 'RetailIQ Platform',
  //   description: 'E-commerce intelligence platform with automated inventory, demand prediction, and multi-channel sales analytics.',
  //   image: 'https://placehold.co/640x400/0d1a2e/8b5cf6?text=RetailIQ',
  //   tags: ['Vue.js', 'Django', 'Redis', 'ML Pipeline'],
  //   category: 'E-Commerce',
  //   accent: '#8b5cf6',
  // },
  // {
  //   title: 'CloudOps Suite',
  //   description: 'Infrastructure-as-code toolkit and monitoring dashboard for DevOps teams managing multi-cloud environments.',
  //   image: 'https://placehold.co/640x400/0d1a2e/10b981?text=CloudOps',
  //   tags: ['Kubernetes', 'Terraform', 'Go', 'Prometheus'],
  //   category: 'DevOps',
  //   accent: '#10b981',
  // },
  // {
  //   title: 'EduSpace LMS',
  //   description: 'Modern learning management system with live classes, AI tutoring, and adaptive course recommendations.',
  //   image: 'https://placehold.co/640x400/0d1a2e/f59e0b?text=EduSpace',
  //   tags: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
  //   category: 'EdTech',
  //   accent: '#f59e0b',
  // },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ title, description, image, tags, category, accent }) {
  return (
    <motion.div
      variants={cardVariant}
      className="group relative bg-dark-700/40 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] cursor-pointer w-full max-w-4xl flex flex-col lg:flex-row"
      style={{ transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 32px 80px ${accent}28` }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden lg:w-1/2 aspect-[16/10] lg:aspect-auto">
        <img
          src={image}
          alt={`${title} — IxonicTech project showcase`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-dark-700/60" />
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-md text-[10px] font-bold tracking-wide"
          style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
        <h3 className="font-display font-bold text-white text-2xl lg:text-3xl mb-3 tracking-[-0.02em]">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-[1.8] mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-dark-500/60 text-slate-300 text-xs font-medium rounded-md border border-white/[0.07]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-1.5 px-5 py-2.5 text-white text-xs font-semibold rounded-lg transition-all duration-200 active:scale-[0.97]"
            style={{ background: accent, boxShadow: `0 0 24px ${accent}44` }}
          >
            <ArrowUpRight size={13} /> View Project
          </button>
          <button className="flex items-center gap-1.5 px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
            <Github size={13} /> GitHub
          </button>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${accent}, transparent 95%)` }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={ref} className="relative section-padding bg-dark-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-600/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-5"
          >
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-slate-400 leading-relaxed"
          >
A look at some of the real products we've shipped — built fast, built to scale, built to last.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-col items-center gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-brand-600/30 text-brand-300 hover:text-white hover:bg-brand-600/10 hover:border-brand-600/60 font-semibold text-sm transition-all duration-200"
          >
            Let's Build Yours <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
