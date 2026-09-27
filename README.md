# FAIZAN SHY — Premium Portfolio

A minimal, premium React + Vite portfolio designed for GitHub Pages.

## Run locally

Install Node.js, then inside this folder:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files from this project.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Add a Vite/Node deployment workflow, or deploy the generated `dist` folder with your preferred GitHub Pages workflow.

For a repository project page, `vite.config.js` already uses `base: "./"` so relative assets work correctly.

## Customize

Edit `src/main.jsx` for:
- name
- bio
- projects
- services
- social links
- email

Edit `src/styles.css` for colors, spacing and typography.

The portfolio intentionally does not require a separate backend or paid hosting service.
