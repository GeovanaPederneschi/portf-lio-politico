const features = [
  {
    icon: '🎨',
    titulo: 'Identidade visual própria',
    texto: 'Cada campanha tem um layout, uma paleta e uma personalidade diferentes — nunca o mesmo template repetido com cores trocadas.',
  },
  {
    icon: '🗳️',
    titulo: 'Cadastro de apoiadores',
    texto: 'Nome, e-mail, WhatsApp e bairro, coletados direto no site, formando a base de contatos (o "perfil do eleitor") da campanha.',
  },
  {
    icon: '📧',
    titulo: 'Disparo de novidades por e-mail',
    texto: 'A equipe avisa todos os apoiadores cadastrados de uma vez, direto de um painel próprio — sem depender do alcance das redes sociais.',
  },
  {
    icon: '🔐',
    titulo: 'Painel para a equipe',
    texto: 'Login protegido para a assessoria acompanhar apoiadores, exportar contatos e enviar comunicados, sem precisar mexer em código.',
  },
  {
    icon: '📲',
    titulo: 'Contato direto por WhatsApp',
    texto: 'O WhatsApp de cada apoiador fica salvo e pode ser exportado em planilha para campanhas de contato direto da equipe.',
  },
  {
    icon: '📸',
    titulo: 'Gerador de foto com o candidato',
    texto: 'O apoiador sobe uma foto e recebe, na hora, uma imagem lado a lado com o candidato — pronta pra postar nos stories.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-[#6D5AE0] to-[#FF6B4A]" />
            <span className="text-[#A5A6C0] text-xs font-bold uppercase tracking-widest">O que entra em cada site</span>
            <span className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B4A] to-[#6D5AE0]" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            Vamos além da landing page
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Todo site que eu entrego já sai com essas funcionalidades — e dá
            pra personalizar cada uma delas do jeito que a campanha precisar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.titulo} className="glass rounded-2xl p-7 hover:bg-white/[0.06] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5AE0] to-[#FF6B4A] flex items-center justify-center mb-5 text-xl">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{f.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.texto}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/35 text-xs mt-10 max-w-xl mx-auto leading-relaxed">
          Disparo automático de WhatsApp entra no roadmap assim que a
          campanha tiver conta comercial aprovada (Meta/Twilio) — a estrutura
          já está pronta pra plugar isso quando for a hora.
        </p>
      </div>
    </section>
  )
}
