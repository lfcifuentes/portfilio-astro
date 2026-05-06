# Portfolio - Astro Version

Luis Fernando Cifuentes - Senior Backend Engineer Portfolio built with Astro.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the project directory
cd astro-version

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Build

To create a production build:

```bash
npm run build
```

The optimized build output will be in the `dist/` directory.

## 🌐 Preview

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
astro-version/
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Stack.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/          # Page layouts
│   │   └── MainLayout.astro
│   ├── pages/            # Routes (index.astro = /)
│   │   └── index.astro
│   └── styles/           # Global styles
│       └── global.css
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## ✨ Features

- ⚡ Ultra-fast static site generation
- 🎨 Modern responsive design
- 🔧 Component-based architecture
- 📱 Mobile-first responsive
- 🌙 Dark theme optimized
- 🎯 SEO-friendly
- 📊 Performance optimized

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to customize the color scheme:

```css
:root {
  --bg: #0a0e1a;
  --blue: #3483FA;
  --green: #00d296;
  /* ... more variables */
}
```

### Fonts

Fonts are loaded from Google Fonts in `src/layouts/MainLayout.astro`. Modify the link to use different fonts.

### Content

Edit individual components in `src/components/` to update content. Each component is isolated and can be modified independently.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Import your repository into Vercel
2. Vercel will automatically detect Astro
3. Deploy with default settings

### Other Platforms

Astro generates static HTML files that can be deployed to any static hosting service:
- GitHub Pages
- GitLab Pages
- AWS S3 + CloudFront
- Cloudflare Pages

## 📝 License

All content is personal and proprietary. Built with ❤️ using Astro.

## 🔗 Links

- [Astro Documentation](https://docs.astro.build)
- [Portfolio Live](https://lf.dev) (when deployed)

---

Made with Astro ⚡
