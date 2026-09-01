export default function Footer() {
  return (
    <footer className="bg-[#0B0B14] border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6D5AE0] to-[#FF6B4A] flex items-center justify-center">
            <span className="text-white font-bold text-xs font-display">GP</span>
          </div>
          <span className="text-white/50 text-sm">Geovana Pederneschi — Sites de campanha</span>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-1.5">
          <a
            href="https://portifolio-pi-ten-82.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-xs font-semibold transition-colors duration-200"
          >
            Ver todos os projetos no portfólio completo ↗
          </a>
          <p className="text-white/30 text-xs">
            Todos os candidatos exibidos neste portfólio são fictícios, exceto quando indicado.
          </p>
        </div>
      </div>
    </footer>
  )
}
