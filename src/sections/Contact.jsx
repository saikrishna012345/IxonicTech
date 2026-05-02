import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ixonictech@gmail.com',
    href: 'mailto:ixonictech@gmail.com',
    color: '#0466C8',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ixonictech@ixonictech.com',
    href: 'mailto:ixonictech@ixonictech.com',
    color: '#0466C8',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Global — Remote & On-site',
    href: null,
    color: '#8b5cf6',
  },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const inputClass =
  'w-full bg-dark-600/60 border border-white/[0.07] focus:border-brand-600/60 focus:ring-2 focus:ring-brand-600/20 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const text = await res.text()
      const data = text ? JSON.parse(text) : {}
      if (!res.ok) throw new Error(data.error || `Server error ${res.status}`)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="relative section-padding bg-dark-900 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-600/8 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mb-5"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight mb-4"
          >
            Got a Project in Mind?{' '}
            <span className="text-gradient">Let's Talk.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-slate-400 leading-relaxed"
          >
            Drop us a message and we'll get back to you within one business day. No sales pitch — just a real conversation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="lg:col-span-2 space-y-5"
          >
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-white text-xl mb-2">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fill out the form or hit us up directly. We respond within one business day — usually way faster.
              </p>
            </motion.div>

            <div className="space-y-4 pt-2">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div key={label} variants={fadeUp}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                      >
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                        <div className="text-white text-sm font-medium group-hover:text-brand-300 transition-colors">
                          {value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                      >
                        <Icon size={18} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                        <div className="text-white text-sm font-medium">{value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Decorative card */}
            <motion.div
              variants={fadeUp}
              className="mt-8 bg-glass rounded-2xl p-5 border border-brand-600/15"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-semibold">Now Taking on New Projects</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                We've got bandwidth right now. If you've been sitting on an idea, this is a good time to reach out.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-glass rounded-2xl p-6 lg:p-8 border border-brand-600/12">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    We got your message and we'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-400 font-medium mb-2 tracking-wide">
                        Full Name <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 font-medium mb-2 tracking-wide">
                        Email Address <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Email"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2 tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2 tracking-wide">
                      Message <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                      <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-600 hover:bg-brand-500 disabled:opacity-70 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(4,102,200,0.4)] hover:shadow-[0_0_40px_rgba(4,102,200,0.6)] active:scale-[0.98]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
