# 🚀 Personal Portfolio

A modern, interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, custom cursor interactions, and AI-powered functionality.

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Built with Motion for fluid, professional transitions
- **Custom Cursor** - Interactive cursor experience throughout the site
- **Dark Theme** - Eye-catching dark theme with neon accents
- **Multiple Sections**:
  - Hero section with introduction
  - Services showcase
  - Project portfolio
  - Skills display
  - Work experience timeline
  - Contact form
  - Professional footer

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion alternative)
- **Icons**: Lucide React
- **Backend**: Express.js
- **AI Integration**: Google Generative AI
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/HarshVerma007/CodeByHarsh.git
cd CodeByHarsh
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean build artifacts
npm run clean

# Run TypeScript type checking
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Background.tsx       # Animated background component
│   ├── CustomCursor.tsx     # Interactive cursor
│   ├── Navbar.tsx           # Navigation bar
│   └── ProjectCard.tsx      # Reusable project card
├── sections/
│   ├── Hero.tsx             # Main hero section
│   ├── Services.tsx         # Services showcase
│   ├── Projects.tsx         # Portfolio projects
│   ├── Skills.tsx           # Skills display
│   ├── Experience.tsx       # Work experience
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer section
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS. Customize the design by:
- Modifying `tailwind.config.js` for theme colors
- Editing individual component files in `src/components/` and `src/sections/`

### Content
Update portfolio content in respective section files:
- **Skills**: Edit `src/sections/Skills.tsx`
- **Experience**: Edit `src/sections/Experience.tsx`
- **Projects**: Edit `src/sections/Projects.tsx`
- **Contact**: Edit `src/sections/Contact.tsx`

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository directly
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure in repository settings
- **Custom Server**: Upload `dist` folder to your hosting

## 📧 Contact & Support

For questions or issues, please open an issue on the GitHub repository.

## 📄 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

---

Built with ❤️ by Harsh Verma
