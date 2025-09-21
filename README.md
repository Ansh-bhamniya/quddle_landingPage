# Quddle AI Frontend

A production-ready Next.js application with TypeScript, Tailwind CSS, and modern development tools.

## 🚀 Features

- **Next.js 15** with App Router and Server Components
- **TypeScript** with strict configuration
- **Tailwind CSS** with custom design system
- **ESLint & Prettier** for code quality
- **Production optimizations** including image optimization and security headers
- **Modern UI components** with accessibility support
- **Custom hooks** for common functionality
- **Responsive design** with dark mode support

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, Prettier
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quddle_ai_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build artifacts
- `npm run preview` - Build and preview production build

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
└── utils/             # Helper utilities
```

## 🎨 Styling

This project uses Tailwind CSS with a custom design system. The global styles include:

- CSS custom properties for theming
- Dark mode support
- Responsive typography
- Custom component classes
- Animation utilities

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Unused variable detection
- Comprehensive type checking
- Path aliases configured (`@/*`)

### ESLint
- Next.js recommended rules
- TypeScript support
- Prettier integration
- Custom rules for code quality

### Prettier
- Consistent code formatting
- Single quotes
- Semicolons enabled
- 80 character line width

### Next.js
- Image optimization
- Security headers
- Bundle analysis support
- Production optimizations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 📝 Development Guidelines

1. **Code Style**: Follow the ESLint and Prettier configurations
2. **TypeScript**: Use strict typing, avoid `any`
3. **Components**: Create reusable components in `src/components/ui/`
4. **Hooks**: Extract reusable logic into custom hooks
5. **Styling**: Use Tailwind CSS classes, create custom components for complex styles
6. **Performance**: Optimize images, use Next.js Image component
7. **Accessibility**: Follow WCAG guidelines, use semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.