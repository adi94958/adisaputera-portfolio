# Portfolio Website - AdiSaputera

A modern, responsive portfolio website built with ReactJS, featuring atomic design patterns and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional, and mobile-responsive
- **Atomic Design**: Organized component structure following atomic design principles
- **State Management**: Redux Toolkit with Redux Thunk for async operations
- **Styling**: Tailwind CSS v3.4 with custom design system
- **Animations**: Smooth animations using Framer Motion
- **API Integration**: Axios instance for API management
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized build with code splitting

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit, Redux Thunk
- **Styling**: Tailwind CSS v3.4
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Icons**: Iconify React
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
src/
├── assets/              # Static assets like images, fonts, etc.
├── components/          # React components organized by atomic design
│   ├── atoms/           # Basic building blocks
│   ├── molecules/       # Simple combinations of atoms
│   ├── organisms/       # Complex UI components
│   └── templates/       # Page layouts
├── constants/           # Constants and configuration files
├── data/                # Static data for the application
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── services/            # API services and client setup
├── store/               # Redux store and slices
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.css              # Global CSS styles
├── App.tsx              # Main App component
├── index.css            # Global Tailwind CSS imports
├── main.tsx             # Application entry point
├── vite-env.d.ts        # Vite environment types
```

This structure ensures a clean and maintainable codebase, following best practices for React and TypeScript projects.

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Porto V2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up API endpoints**
   Update the base URL in `src/services/apiClient.ts` if needed:
   ```typescript
   const BASE_URL = "http://localhost:3000";
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 API Endpoints

The application expects the following API endpoints:

- `GET /user` - User authentication data
- `GET /profile` - Profile information
- `GET /abilities` - Skills and expertise data
- `GET /professional_experience` - Work experience
- `GET /organization_experience` - Organization involvement
- `GET /education` - Educational background
- `GET /projects` - Portfolio projects

## 🎨 Design System

### Colors

- **Primary**: Blue shades for main actions and highlights
- **Secondary**: Gray shades for text and backgrounds
- **Accent**: Purple shades for special elements

### Typography

- **Font**: Inter (primary), JetBrains Mono (code)
- **Scale**: Display, Heading, Subheading, Body, Caption, Small

### Components

All components follow atomic design principles:

- **Atoms**: Basic elements (buttons, text, cards)
- **Molecules**: Simple component combinations
- **Organisms**: Complex sections
- **Templates**: Page layouts
- **Pages**: Complete pages

## 🔄 State Management

Redux Toolkit is used for state management with the following slices:

- `profileSlice`: User profile data
- `abilitiesSlice`: Skills and technologies
- `projectsSlice`: Portfolio projects

Each slice includes:

- Async thunks for API calls
- Loading and error states
- Type-safe actions and reducers

## 🎭 Animations

Framer Motion provides smooth animations:

- Page transitions
- Component entrance animations
- Hover effects
- Loading states
- Scroll-triggered animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development

### Code Structure Guidelines

1. Follow atomic design principles
2. Use TypeScript for type safety
3. Implement proper error handling
4. Write reusable components
5. Maintain consistent naming conventions

### Adding New Components

1. Create component in appropriate atomic level
2. Export from index file
3. Add TypeScript interfaces
4. Implement responsive design
5. Add animations where appropriate

### Adding New API Endpoints

1. Define types in `src/types/index.ts`
2. Add service methods in `src/services/portfolioApi.ts`
3. Create Redux slice if needed
4. Implement error handling

## 🌟 Features in Detail

### Homepage Sections

- **Hero**: Introduction with call-to-action
- **About**: Personal information and background
- **Skills**: Technical expertise display
- **Projects**: Portfolio showcase
- **Contact**: Contact form and information

### Interactive Elements

- Smooth scrolling navigation
- Hover animations
- Loading states
- Form validation
- Error handling
- Mobile-friendly navigation

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure the API base URL for production

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please contact:

- Email: adi94958@gmail.com
- Location: Majalengka, West Java, Indonesia

---

Built with ❤️ using modern web technologies
