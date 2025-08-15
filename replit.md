# Overview

This is a professional portfolio website for Dr. Suparno Datta, built as a full-stack web application showcasing his experience as a Principal Software Engineer, academic achievements, and research publications. The application features a modern React frontend with a Node.js/Express backend, designed to present professional information and handle contact form submissions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and follows a component-based architecture. Key architectural decisions include:

- **UI Framework**: Uses shadcn/ui components built on Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

The application follows a single-page application (SPA) pattern with smooth scrolling navigation between sections. Components are organized by feature (hero, experience, education, etc.) with shared UI components in a dedicated directory.

## Backend Architecture
The backend uses Express.js with TypeScript in an ESM module setup:

- **API Structure**: RESTful endpoints under `/api` prefix for contact form handling
- **Data Storage**: Currently uses in-memory storage (MemStorage class) with an interface-based design that allows easy migration to database storage
- **Schema Validation**: Drizzle ORM with Zod for type-safe database schemas and validation
- **Development Setup**: Integrated with Vite for seamless full-stack development experience

The server implements middleware for request logging, JSON parsing, and error handling. The modular storage interface allows switching from memory storage to database storage without changing the API layer.

## Database Design
The application is configured for PostgreSQL using Drizzle ORM:

- **Schema Management**: Centralized schema definitions in `shared/schema.ts` for type sharing between frontend and backend
- **Contact Storage**: Simple contact table with fields for name, email, message, and timestamps
- **Type Safety**: Generated TypeScript types from database schema ensure compile-time safety

## Development and Deployment
The project uses a monorepo structure with shared types and schemas:

- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot module replacement for frontend, tsx for backend development server
- **Configuration**: Environment-based configuration with DATABASE_URL for database connection
- **Deployment**: Separate build outputs for static frontend assets and bundled backend server

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with migrations support
- **Connection**: PostgreSQL dialect with environment-based connection string

## UI and Design
- **Radix UI**: Comprehensive set of accessible UI primitives for React
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library based on Radix UI

## Development Tools
- **TypeScript**: Full-stack type safety with shared types
- **Vite**: Build tool with development server and HMR
- **React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

## Utilities and Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional CSS class handling
- **Wouter**: Lightweight routing library
- **nanoid**: Unique ID generation

The application is configured for deployment on Replit with specific development environment optimizations and error handling overlays.