import carlosMendes from '../assets/previews/carlos-mendes.png'
import marinaDuarte from '../assets/previews/marina-duarte.png'
import biancaFerraz from '../assets/previews/bianca-ferraz.png'
import marcosTeixeira from '../assets/previews/marcos-teixeira.png'
import luizaAmaral from '../assets/previews/luiza-amaral.png'
import pauloVasconcelos from '../assets/previews/paulo-vasconcelos.png'

const projetos = [
  {
    img: carlosMendes,
    nome: 'Carlos Mendes',
    pauta: 'Modelo base da campanha',
    texto: 'O template original: hero clássico, cadastro de apoiadores e gerador de foto lado a lado com o candidato.',
    repo: 'https://github.com/GeovanaPederneschi/lading-page-candidato',
  },
  {
    img: marinaDuarte,
    nome: 'Marina Duarte',
    pauta: 'Placeholder moderno',
    texto: 'Visual escuro e minimalista, com avatar abstrato em gradiente — uma vitrine mais contemporânea.',
    repo: 'https://github.com/GeovanaPederneschi/site-candito-moderno',
  },
  {
    img: biancaFerraz,
    nome: 'Bianca Ferraz',
    pauta: 'Pauta: Proteção Animal',
    texto: 'Mural de campo com recados fixados, washi tape e varal de conquistas — tudo com clima de causa.',
    repo: 'https://github.com/GeovanaPederneschi/site-canditado-animais',
  },
  {
    img: marcosTeixeira,
    nome: 'Marcos Teixeira',
    pauta: 'Pauta: Segurança Pública',
    texto: 'Tema tático com radar animado, scanlines e dossiê interativo de propostas — sem nenhuma imagem de arma.',
    repo: 'https://github.com/GeovanaPederneschi/site-canditado-arma',
  },
  {
    img: luizaAmaral,
    nome: 'Luiza Amaral',
    pauta: 'Pauta: Meio Ambiente',
    texto: 'Cosmos escuro com globo 3D animado em CSS puro e campo de partículas — "Planeta Vivo".',
    repo: 'https://github.com/GeovanaPederneschi/site-canditado-ambientalista',
  },
  {
    img: pauloVasconcelos,
    nome: 'Paulo Vasconcelos',
    pauta: 'Pauta: Educação',
    texto: 'Lousa e caderno: post-its coloridos, giz animado e um boletim escolar com a trajetória do candidato.',
    repo: 'https://github.com/GeovanaPederneschi/site-canditado-educacao',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#0B0B14]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A]" />
            <span className="text-[#A5A6C0] text-xs font-bold uppercase tracking-widest">Projetos</span>
            <span className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B4A] to-[#6D5AE0]" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            Cada campanha, um site diferente
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Estes são projetos de demonstração — cada um pensado do zero pra
            uma pauta diferente, pra mostrar até onde dá pra ir com layout,
            interação e identidade visual.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((p) => (
            <a
              key={p.nome}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors duration-200"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#14141F]">
                <img
                  src={p.img}
                  alt={`Preview do site de ${p.nome}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-[#FF6B4A] text-[11px] font-bold uppercase tracking-widest">
                  {p.pauta}
                </span>
                <h3 className="font-display font-bold text-lg text-white mt-1.5 mb-2">{p.nome}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{p.texto}</p>
                <span className="inline-flex items-center gap-1.5 text-white/70 text-xs font-semibold group-hover:text-white transition-colors">
                  Ver código no GitHub
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-white/35 text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          Todos os candidatos e propostas acima são fictícios, criados só
          para demonstração — cada um roda com seu próprio banco de dados de
          apoiadores e painel administrativo, iguais aos que entrego pra
          campanhas reais.
        </p>
      </div>
    </section>
  )
}
