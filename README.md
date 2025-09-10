<div align="center">
  <img src="src/assets/logo/techterview_wordmark_colored.webp" alt="TechTerview Logo" width="300">
  
  # TechTerview Landing Page
  
  **Modern, responsive landing page built with Astro, Vue, and Tailwind CSS**
  
  [![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?logo=astro&logoColor=white)](https://astro.build)
  [![Vue.js](https://img.shields.io/badge/Vue.js-3.0-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
</div>

---

## ✨ Features

- **🎨 Modern Design**: Glassmorphism effects with liquid glass components
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Lightning Fast**: Built with Astro for optimal performance
- **🎭 Interactive Components**: Vue.js components with smooth animations
- **🎯 SEO Optimized**: Meta tags, structured data, and performance optimized
- **📧 Contact Forms**: Integrated EmailJS for seamless communication
- **🌐 Multi-page**: Home, About, Contact pages with smooth navigation
- **🎪 Rich Animations**: Framer Motion and custom CSS animations

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd techterview-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site in action!

## 📁 Project Structure

```text
/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── android-chrome-*.png
│   └── site.webmanifest
├── src/
│   ├── assets/                 # Images, logos, icons
│   │   ├── images/
│   │   ├── logo/              # TechTerview branding
│   │   ├── team/              # Team member photos
│   │   └── tech-icons/        # Technology stack icons
│   ├── components/            # Reusable components
│   │   ├── ui/                # UI components
│   │   │   ├── LiquidGlass.vue
│   │   │   ├── ShimmerButton.vue
│   │   │   └── Timeline.vue
│   │   ├── Header.astro       # Navigation header
│   │   ├── Footer.astro       # Site footer
│   │   ├── Hero.vue           # Landing hero section
│   │   ├── AboutHero.vue      # About page hero
│   │   ├── BentoSection.vue   # Feature showcase
│   │   ├── TechStackSection.vue
│   │   ├── TeamSection.vue
│   │   ├── ContactForm.vue    # Contact form with EmailJS
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro       # Base layout template
│   ├── lib/                   # Utilities and configurations
│   │   ├── emailjs-config.ts  # EmailJS setup
│   │   └── utils.ts           # Helper functions
│   ├── pages/                 # Route pages
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── contact.astro      # Contact page
│   │   └── 404.astro          # Error page
│   └── styles/
│       └── global.css         # Global styles
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator with component islands
- **[Vue.js 3](https://vuejs.org)** - Progressive JavaScript framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[EmailJS](https://www.emailjs.com)** - Email service integration
- **[Vite](https://vitejs.dev)** - Fast build tool and dev server

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install project dependencies                     |
| `npm run dev`             | Start local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally before deploying          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📧 EmailJS Setup

The contact form uses EmailJS for email functionality. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com)
2. Follow the setup guide in `EMAILJS_SETUP.md`
3. Configure your service ID, template ID, and public key in `src/lib/emailjs-config.ts`

## 🎨 Customization

### Branding
- Update logos in `src/assets/logo/`
- Modify colors in `tailwind.config.mjs`
- Customize fonts and typography in `src/styles/global.css`

### Content
- Edit page content in `src/pages/`
- Update component text and images in `src/components/`
- Modify team information in `TeamSection.vue`

### Styling
- Global styles: `src/styles/global.css`
- Component-specific styles: Within each `.vue` or `.astro` file
- Tailwind utilities: Used throughout components

## 🚀 Deployment

The site is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

Build the project with `npm run build` and deploy the `dist/` folder.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px  
- **Desktop**: ≥ 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: WebP format with proper sizing
- **Code Splitting**: Automatic with Astro's island architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by the TechTerview team</p>
  <p>
    <a href="https://techterview.com">Website</a> •
    <a href="mailto:contact@techterview.com">Contact</a> •
    <a href="https://github.com/techterview">GitHub</a>
  </p>
</div>