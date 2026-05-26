# Portfolio — Davy Andrade

Portfolio pessoal com design escuro inspirado no Catppuccin Mocha.  
Constrói experiências densas, rápidas e acessíveis com foco em produto.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro](https://astro.build) 6.3 — static site generator |
| Componentes | [Vue 3](https://vuejs.org) 3.5 + Composition API |
| UI Kit próprio | `class-variance-authority` + `clsx` + `tailwind-merge` (`cn()`) |
| Estilo | [Tailwind CSS](https://tailwindcss.com) v4.2 + `@theme inline` |
| Ícones | [Lucide](https://lucide.dev) (`lucide-vue-next`) |
| Fontes | Inter Variable via `@fontsource-variable/inter` |
| Animações | `tw-animate-css` + `@keyframes` em `@theme` |
| Runtime | [Bun](https://bun.sh) |
| TypeScript | Strict mode via `astro/tsconfigs/strict` |

## Estrutura de diretórios

```
src/
├── assets/              # Imagens, SVGs
├── components/
│   ├── ui/              # Componentes de UI
│   │   ├── card/        # Card + CardHeader, CardTitle, CardDescription,
│   │   │                # CardContent, CardFooter, CardAction
│   │   ├── Button.vue   # green-pill, dark-pill, outlined, play-circle, browse
│   │   ├── Input.vue    # default, error, textarea
│   │   └── Typography.vue # h1, h2, h3, body, muted, caption, badge, label
│   ├── Hero.vue         # Seção principal
│   ├── About.vue        # Sobre
│   ├── Projects.vue     # Projetos
│   ├── Experience.vue   # Experiência
│   ├── Navbar.vue       # Navegação fixa
│   └── Footer.vue       # Rodapé
├── data/                # Conteúdo textual (separado por seção)
│   ├── hero.json
│   ├── about.json
│   ├── projects.json
│   ├── experience.json
│   └── footer.json
├── layouts/
│   └── Layout.astro     # Shell HTML base
├── pages/
│   ├── index.astro      # Página principal
│   └── storybook.astro  # UI Kit / Design system showcase
├── lib/
│   └── utils.ts         # cn() → clsx + tailwind-merge
└── styles/
    ├── fonts.css        # Importação de fontes
    ├── theme.css        # Design tokens CSS (Catppuccin Mocha)
    ├── tailwind.css     # @tailwindcss + @theme inline + design tokens
    ├── index.css        # Orquestrador (fonts → theme)
    └── global.css       # Entry point: importa index + tailwind + @layer base
```

## Design System

Tema escuro Catppuccin Mocha, documentado em [`docs/DESIGN.md`](./docs/DESIGN.md).  
Os tokens estão em `src/styles/theme.css` como variáveis `--catppuccin-color-*` e mapeadas para classes Tailwind via `@theme inline` em `tailwind.css`.

### Tokens de superfície e texto

| Classe Tailwind | CSS Variable | Catppuccin | Hex |
|---|---|---|---|
| `bg-surface` | `--color-surface` | Mantle | `#181825` |
| `bg-surface-mid` | `--color-surface-mid` | Base | `#1e1e2e` |
| `bg-card-dark` | `--color-card-dark` | Surface0 | `#313244` |
| `text-muted` | `--color-muted` | Subtext0 | `#a6adc8` |
| `text-near-white` | `--color-near-white` | Subtext1 | `#bac2de` |
| `text-separator` | `--color-separator` | Overlay2 | `#9399b2` |
| `border-border-gray` | `--color-border-gray` | Surface1 | `#45475a` |
| `border-border-light` | `--color-border-light` | Overlay0 | `#6c7086` |

### Tokens semânticos e de destaque

| Classe | CSS Variable | Hex |
|---|---|---|
| `bg-green` / `text-green` | `--color-green` | `#a6e3a1` |
| `bg-mauve` / `text-mauve` | `--color-mauve` | `#cba6f7` |
| `bg-blue` / `text-blue` | `--color-blue` | `#89b4fa` |
| `bg-peach` / `text-peach` | `--color-peach` | `#fab387` |
| `bg-negative` / `text-negative` | `--color-negative` | `#f38ba8` |
| `bg-warning` / `text-warning` | `--color-warning` | `#fab387` |
| `bg-info` / `text-info` | `--color-info` | `#89b4fa` |

### Sombras, cantos e fontes

| Token | Valor |
|---|---|
| `shadow-medium` | `rgba(0,0,0,0.3) 0px 8px 8px` |
| `shadow-heavy` | `rgba(0,0,0,0.5) 0px 8px 24px` |
| `shadow-inset` | Inset duplo (`#121212` / `#7c7c7c`) |
| `rounded-pill` | `500px` |
| `rounded-circle` | `50%` |
| `font-title` | SpotifyMixUITitle stack |
| `font-ui` | SpotifyMixUI stack |

### Componentes de UI

Em `src/components/ui/`:

- **Button.vue** — variantes `green-pill`, `dark-pill`, `browse`, `outlined`, `play-circle` + tamanhos `sm`/`default`/`lg`/`icon` + prop `as` (`button`/`a`)
- **Card** (`card/Card.vue`) — variantes `surface`, `mid`, `outlined`, `elevated` + padding `none`/`sm`/`default`/`lg` + toggle `hover` + prop `as`
- **CardHeader / CardTitle / CardDescription / CardContent / CardFooter / CardAction** — sub-componentes compostos
- **Input.vue** — variantes `default`, `error`, `textarea` + tamanhos `sm`/`default`/`lg`
- **Typography.vue** — variantes `h1`, `h2`, `h3`, `body`, `muted`, `caption`, `badge`, `label`, `sectionLabel` + prop `as`

Todos usam `cva()` + `cn()` e seguem o padrão CVA.

### Storybook

Disponível em `/storybook` durante dev. Mostra todas as seções do design system:
01 Colors · 02 Typography · 03 Buttons · 04 Cards · 05 Forms · 06 Spacing · 07 Radius · 08 Motion · 09 Depth

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
- Componentes compostos (Card) exportados via barrel `index.ts`
- `v-bind="$attrs"` em componentes com prop `as` para encaminhamento de atributos
- Ícones Lucide importados por pacote específico do framework
- Conteúdo textual em `src/data/` separado por seção
- Tokens de design em `theme.css` e mapeados em `tailwind.css`, nunca valores mágicos nos componentes
