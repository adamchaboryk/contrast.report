# Contrast Report
A simple colour contrast checker featuring picture-in-picture mode!

## Features
- **Picture-in-picture mode.** Pop-up overlay and eye dropper combo lets you select colours **anywhere** on screen.
- **Colour suggestions.** Recommends a compliant colour as close as possible to the original.
- **Carefully crafted UI.** Simple, minimal scrolling, ideal for screenshots, and sharing permalinks within audits.
- **Dynamic and editable preview area.** Text can be copied and pasted into audits.
- **Permalinks.**  Share link to any colour combination.
- **Flexible.** Supports a wide variety of colour spaces and alpha/transparency.
- **Progressive Web App (PWA).** Installable and works offline.
- **Save swatches.** Save colour swatches/combos with local storage.

## Built with
- Vanilla javascript & CSS.
- Contrast checking and auto-suggestions powered by [Sa11y.](https://sa11y.netlify.app)
- Tooling powered by [Vite](https://vite.dev) and [vite-vanilla-js-template.](https://github.com/Barata-Ribeiro/vite-vanilla-js-template)
- Two experimental technologies: [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API) and [Document Picture-in-Picture API.](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API).

With many thanks to @itmaybejj for feedback and moral support. ✨

## Limitations
This tool works best in Chrome and Microsoft Edge! Eyedropper doesn't work on Windows unfortunately, please use eyedropper within native colour picker.

## To-do
- [ ] i18n
- [ ] Clean up spaghetti/refactor

## Local development
1. `npm install`
2. `npm run dev`
