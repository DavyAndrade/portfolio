# Portfolio — Davy Andrade

Portfolio pessoal com design escuro imersivo inspirado no Spotify.  
Constrói experiências densas, rápidas e acessíveis com foco em produto.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro](https://astro.build) 6.3 — static site generator |
| Componentes | [Vue 3](https://vuejs.org) 3.5 + Composition API + `defineProps`/`defineSlots` |
| UI Kit próprio | `class-variance-authority` + `clsx` + `tailwind-merge` (`cn()`) |
| Estilo | [Tailwind CSS](https://tailwindcss.com) v4.2 + `@theme inline` |
| Ícones | [Lucide](https://lucide.dev) (`lucide-vue-next`, `@lucide/astro`) |
| Fontes | Inter Variable via `@fontsource-variable/inter` |
| Animações | `tailwindcss-animate` + `tw-animate-css` |
| Runtime | [Bun](https://bun.sh) |

## Estrutura de diretórios

```
src/
├── assets/              # Imagens, SVGs
├── components/
│   ├── ui/              # Componentes de UI (Button.vue, Card.vue)
│   ├── Hero.vue         # Seção principal
│   ├── About.vue        # Sobre
│   ├── Projects.vue     # Projetos
│   ├── Experience.vue   # Experiência
│   ├── Navbar.vue       # Navegação fixa
│   └── Footer.vue       # Rodapé
├── layouts/
│   └── Layout.astro     # Shell HTML base
├── pages/
│   ├── index.astro      # Página principal
│   ├── storybook.astro  # UI Kit / Design system showcase
│   └── teste.astro      # Referência de design system (raw HTML)
├── lib/
│   └── utils.ts         # cn() → clsx + tailwind-merge
├── styles/
│   ├── fonts.css        # Importação de fontes
│   ├── theme.css        # Design tokens CSS (--spotify-*)
│   ├── tailwind.css     # @tailwindcss + @theme inline + tw-animate-css
│   ├── index.css        # Orquestrador (fonts → theme)
│   └── global.css       # Entry point: importa index + tailwind + @layer base
└── content.json         # Conteúdo textual do portfólio
```

## Design System

Tema escuro inspirado no Spotify, documentado em [`docs/DESIGN.md`](./docs/DESIGN.md).  
Os tokens estão em `src/styles/theme.css` como variáveis `--spotify-*` e mapeadas para classes Tailwind via `@theme inline` em `tailwind.css`.

### Tokens disponíveis

| Classe Tailwind | CSS Variable | Valor |
|---|---|---|
| `bg-green` / `text-green` | `--spotify-green` | `#1ed760` |
| `bg-surface` | `--spotify-surface-dark` | `#181818` |
| `bg-surface-mid` | `--spotify-surface-mid` | `#1f1f1f` |
| `text-muted` | `--spotify-text-muted` | `#b3b3b3` |
| `text-separator` | `--spotify-separator` | `#b3b3b3` |
| `text-near-white` | `--spotify-text-near-white` | `#cbcbcb` |
| `shadow-medium` | `--spotify-shadow-medium` | `rgba(0,0,0,0.3) 0px 8px 8px` |
| `shadow-heavy` | `--spotify-shadow-heavy` | `rgba(0,0,0,0.5) 0px 8px 24px` |
| `shadow-inset` | `--spotify-shadow-inset` | inset combinação |
| `rounded-pill` | `--spotify-radius-pill` | `500px` |
| `rounded-circle` | `--spotify-radius-circle` | `50%` |
| `font-title` | `--spotify-font-title` | SpotifyMixUITitle stack |
| `font-ui` | `--spotify-font-ui` | SpotifyMixUI stack |
| `bg-negative` / `text-negative` | `--spotify-text-negative` | `#f3727f` |
| `bg-warning` / `text-warning` | `--spotify-text-warning` | `#ffa42b` |
| `bg-info` / `text-info` | `--spotify-text-announcement` | `#539df5` |

### Componentes de UI

Em desenvolvimento em `src/components/ui/`:

- **Button.vue** — variantes: `green-pill`, `dark-pill`, `browse`, `outlined`, `play-circle` + tamanhos `sm`/`default`/`lg`/`icon`
- **Card.vue** — variantes: `surface`, `mid`, `outlined` + padding `sm`/`default`/`lg` + toggle `hover`

Ambos usam `cva()` + `cn()` e seguem o padrão CVA.

### Storybook

Disponível em `/storybook` durante dev. Mostra todas as seções do design system:
01 Colors · 02 Typography · 03 Buttons · 04 Cards · 05 Forms · 06 Spacing · 07 Radius · 08 Depth

Com animações de entrada (Intersection Observer), micro-interações nos componentes e overlay de noise/grain.

## Comandos

| Comando | Ação |
|---|---|
| `bun install` | Instalar dependências |
| `bun run dev` | Iniciar dev server em `localhost:4321` |
| `bun run build` | Build de produção para `./dist/` |
| `bun run preview` | Preview do build local |

## Convenções

- Variantes de componente via CVA em `cva()` dentro do próprio `.vue`
- `cn()` de `@/lib/utils` para merge de classes
- Ícones Lucide importados por pacote específico do framework
- Conteúdo textual centralizado em `content.json`
- Tokens de design em `theme.css`, nunca valores mágicos nos componentes
