# Sean Pearce — Portfolio

Vite + React + TypeScript + Material UI.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

## Structure

```
src/
├── main.tsx                       entrypoint
├── App.tsx                        ThemeProvider + CssBaseline wrapper
├── theme.ts                       MUI theme: blueprint palette, IBM Plex fonts
└── components/
    ├── SeanPearcePortfolio.tsx    all page content
    └── BlueprintGraph.tsx         hero SVG node-graph
```

## Notes

- Fonts (IBM Plex Mono / IBM Plex Sans) load via Google Fonts `<link>` tags in `index.html`.
- The dark "blueprint" background grid is applied globally through `MuiCssBaseline`
  overrides in `theme.ts`, so it's available on every page without extra markup.
- The experience section uses `@mui/lab`'s `Timeline` component.
- Icons are from `lucide-react`; swap in `@mui/icons-material` if you'd rather stay
  fully within the MUI ecosystem.
