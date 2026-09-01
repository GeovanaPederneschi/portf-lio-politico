import { useState, useEffect } from 'react'

const links = [
  { href: '#features', label: 'O que eu faço' },
  { href: '#portfolio', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B14]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6D5AE0] to-[#FF6B4A] flex items-center justify-center shadow-lg shadow-[#6D5AE0]/20">
            <span className="text-white font-bold text-sm font-display">GP</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-display font-bold text-sm">Geovana Pederneschi</span>
            <span className="text-[#A5A6C0] text-[10px] uppercase tracking-widest font-medium">
              Sites de campanha
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/GeovanaPederneschi/portifolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Portfólio completo ↗
          </a>
          <a
            href="#contato"
            className="bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#6D5AE0]/20"
          >
            Falar comigo
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-white"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0B0B14] py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-3.5 text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/GeovanaPederneschi/portifolio"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block px-8 py-3.5 text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium border-b border-white/5 transition-colors"
          >
            Portfólio completo ↗
          </a>
          <div className="px-8 py-4">
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A] text-white font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
            >
              Falar comigo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
