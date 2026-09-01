export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#0B0B14] overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute -top-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-[#6D5AE0]/20 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#FF6B4A]/15 blur-[110px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-white/70 uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A]" />
          Portfólio · Sites de campanha
        </span>

        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-white mb-6">
          Sites de campanha completos —<br className="hidden sm:block" />
          <span className="gradient-text">não só uma página bonita.</span>
        </h1>

        <p className="text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
          Eu crio sites de campanha sob medida: identidade visual própria pra
          cada candidato, cadastro de apoiadores, disparo de novidades,
          painel para a equipe e ferramentas interativas. Nada de template
          genérico — cada projeto é pensado do zero.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#6D5AE0]/25"
          >
            Ver os projetos
          </a>
          <a
            href="#contato"
            className="glass text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
          >
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  )
}
