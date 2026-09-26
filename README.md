# Faizan Shy — Premium Portfolio

A black-and-white, premium minimalist personal portfolio built with React + Vite.

## Tech
- React
- Vite
- JavaScript
- Custom CSS
- CSS scroll/hover animations
- Lucide icons
- GitHub Pages compatible
- No backend required

## Contact / Social
- Email: faizanshy7@gmail.com
- Instagram: https://www.instagram.com/faizanshy
- SMUN Drinks: https://smundrinks.github.io/smundrinks/

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## GitHub Pages

1. Create a GitHub repository.
2. Upload this project to the repository.
3. Make sure the repository contains `package.json`.
4. For a simple source-code upload, use GitHub Actions to build Vite, or build locally and deploy the `dist` folder.
5. The included `vite.config.js` uses `base: "./"` so the site works correctly when hosted under a repository path.

### Recommended GitHub Pages deployment

Use GitHub Actions:

- Repository → Settings → Pages
- Under Build and deployment, select **GitHub Actions**
- Add a Vite/Node Pages workflow if GitHub does not automatically provide one.

## Important

This is a static portfolio. There is no database, login system, server API, admin panel, or server-side contact form.

The contact button uses `mailto:` and social links, so no backend is needed.
