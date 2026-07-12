# CAIQUE OS

Portfólio pessoal de **Caique Brandão**, Software Engineer, Full Stack Developer e Systems Analyst, construído como se fosse a interface de um sistema operacional, não um site tradicional.

🔗 **Online: [Digital Identity](https://caique-os.vercel.app),** _em breve_
📦 **Stack:** Next.js · TypeScript · Tailwind CSS v4 · Motion

---

## Sobre o projeto

Em vez de uma landing page comum, o CAIQUE OS apresenta informações profissionais (identidade, competências, projetos, histórico e experimentos com IA) como módulos de um sistema: registros de dados, logs de atividade, status em tempo real e um núcleo visual inspirado em um horizonte de eventos.

O objetivo é comunicar, através da própria interface, competência técnica, organização e atenção ao detalhe — não só descrever isso em texto.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Linguagem | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animações | [Motion](https://motion.dev/) (`motion/react`) |
| Ícones | Lucide React, React Icons |
| Deploy | Vercel |

## Estrutura do projeto

```
src/
├── app/                 # rotas e layout raiz (App Router)
├── components/
│   ├── layout/          # header, footer, wrappers de página
│   ├── projects/        # cards e janelas de projeto
│   ├── sections/        # seções da home (hero, identity, capabilities...)
│   ├── system/          # peças de "sistema" (status bar, background grid)
│   └── ui/              # componentes reutilizáveis (botões, live-role...)
├── data/                 # conteúdo estático tipado (projetos, módulos, etc.)
├── hooks/                # hooks compartilhados
├── lib/                  # utilitários
├── styles/               # tokens e estilos globais
└── types/                 # tipos compartilhados
```

## Rodando localmente

```bash
# clonar o repositório
git clone https://github.com/SEU-USUARIO/caique-os.git
cd caique-os

# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm run start
```

## Seções

- **Identity** — perfil, disponibilidade e áreas de foco atuais
- **Capabilities** — competências técnicas organizadas por módulo
- **Projects** — projetos selecionados, com stack e status
- **Activity Log** — histórico cronológico de entregas
- **AI Lab** — integrações e experimentos com IA
- **Contact** — canais de contato direto

## Deploy

O projeto é hospedado na [Vercel](https://vercel.com), com deploy automático a cada push na branch `main`.

## Licença

Uso pessoal — Caique Brandão © 2026.
