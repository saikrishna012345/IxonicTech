import { Github, Twitter, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Software Development', href: '#services' },
    { label: 'Web & Mobile Apps', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'AI & Automation', href: '#services' },
    { label: 'IT Consulting', href: '#services' },
  ],
}

const socials = [
  { icon: Github, href: 'https://github.com/ixonictech', label: 'IxonicTech on GitHub' },
  { icon: Twitter, href: 'https://twitter.com/ixonictech', label: 'IxonicTech on Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ixonictech', label: 'IxonicTech on LinkedIn' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-800 border-t border-brand-600/10 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')}>
              <img src="/logo.png" alt="IxonicTech" className="h-10 w-auto mb-5" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We build software that helps businesses move faster, scale smarter, and win more. Plain and simple.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-dark-500/60 border border-dark-300/30 text-slate-400 hover:text-white hover:border-brand-600/40 hover:bg-brand-600/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm tracking-wide mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => scrollTo(e, href)}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Contact</h4>
            <address className="not-italic">
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:ixonictech@gmail.com"
                    className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-md bg-brand-600/15 text-brand-400 group-hover:bg-brand-600/25 transition-colors">
                      <Mail size={13} />
                    </span>
                    ixonictech@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ixonictech@ixonictech.com"
                    className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-md bg-brand-600/15 text-brand-400 group-hover:bg-brand-600/25 transition-colors">
                      <Mail size={13} />
                    </span>
                    ixonictech@ixonictech.com
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="w-7 h-7 flex items-center justify-center rounded-md bg-brand-600/15 text-brand-400 flex-shrink-0 mt-0.5">
                      <MapPin size={13} />
                    </span>
                    India &mdash; Remote &amp; On-site Worldwide
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} IxonicTech. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
