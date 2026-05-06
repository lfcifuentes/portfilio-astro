# Development Guide

## Getting Started

This is an Astro-based portfolio for Luis Fernando Cifuentes. The project is structured as a collection of reusable components that make up a single-page portfolio.

## Project Structure

### Components (`src/components/`)

Each component is self-contained and includes its own styles:

- **Nav.astro** - Navigation bar with logo and mobile menu
- **Hero.astro** - Hero section with terminal emulator
- **About.astro** - About section with impact metrics
- **Stack.astro** - Technology stack cards
- **Projects.astro** - Featured projects showcase
- **Experience.astro** - Work experience timeline
- **Contact.astro** - Contact section with social links
- **Footer.astro** - Footer with copyright

### Layouts (`src/layouts/`)

- **MainLayout.astro** - Main page layout that includes global styles and head tags

### Pages (`src/pages/`)

- **index.astro** - Homepage that composes all components

### Styles (`src/styles/`)

- **global.css** - Global styles, CSS variables, and responsive breakpoints

## Development Workflow

### Making Changes

1. **Content Changes**: Edit the relevant component file in `src/components/`
2. **Style Changes**: Update component styles in the `<style>` block within each component
3. **Global Styles**: Modify `src/styles/global.css` for site-wide changes

### Adding New Sections

1. Create a new `.astro` file in `src/components/`
2. Import it in `src/pages/index.astro`
3. Add it to the component composition

### Responsive Design

The project uses CSS media queries for responsiveness:

- `@media (max-width: 900px)` - Tablet
- `@media (max-width: 700px)` - Mobile
- `@media (max-width: 520px)` - Small mobile

## Build Process

### Development

```bash
npm run dev
```

- Hot module replacement (HMM)
- Local development server at `http://localhost:3000`
- Live updates as you edit files

### Production

```bash
npm run build
```

- Optimizes all assets
- Minifies CSS and JavaScript
- Generates static HTML files
- Output in `dist/` directory

## Key Technologies

- **Astro** - Static site generator
- **CSS** - Native CSS with custom properties
- **JavaScript** - Vanilla JS (for mobile menu interactivity)
- **Google Fonts** - Space Grotesk, Plus Jakarta Sans, IBM Plex Mono

## Component Communication

Components are independent and don't pass props to each other. Communication is managed through:

- Scroll anchors (e.g., `#about`, `#projects`)
- Global CSS variables
- Navigation links

## Performance Optimization

- All components are pre-rendered as static HTML
- CSS is scoped to components to avoid conflicts
- Images should be optimized before adding
- JavaScript is minimal and vanilla

## Deployment

The project is ready to deploy to any static hosting:

```bash
npm run build
# Deploy the 'dist' directory
```

Popular options:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages

## Troubleshooting

### Port 3000 already in use

```bash
npm run dev -- --port 3001
```

### Dependencies issues

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
npm run build
# Check for console errors
```

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Make your changes
4. Build for production: `npm run build`
5. Deploy to your hosting platform

Enjoy! 🚀
