const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MSG = encodeURIComponent('Oi, Geovana! Vi seu portfólio e quero um site pra minha campanha.')
const EMAIL = 'contato@geovanapederneschi.dev'

export default function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0F0F1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] rounded-full bg-[#6D5AE0]/15 blur-[110px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A]" />
          <span className="text-[#A5A6C0] text-xs font-bold uppercase tracking-widest">Vamos conversar</span>
          <span className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B4A] to-[#6D5AE0]" />
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
          Quer um site assim pra sua campanha?
        </h2>
        <p className="text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
          Conta pra mim a pauta, o público e o prazo. A gente monta junto o
          layout, as propostas e as features — do jeito que fizer sentido
          pra sua candidatura.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#6D5AE0]/25 inline-flex items-center gap-2"
          >
            📲 Chamar no WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="glass text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors duration-200 inline-flex items-center gap-2"
          >
            ✉️ {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}
