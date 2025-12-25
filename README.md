# PopX Account Management System

A modern React-based account management web application built with Material-UI (MUI) and TypeScript. This application provides user authentication flows including signup, login, and profile management.

## 🚀 Features

- **User Authentication**
  - Sign up with email and password
  - Login with validation
  - Protected routes for authenticated users
  - Token-based session management

- **Form Validation**
  - Real-time form validation using Zod and React Hook Form
  - Custom error messages and helper text
  - Client-side validation before submission

- **Modern UI/UX**
  - Clean, responsive design with Material-UI components
  - Custom theme with purple accent colors
  - Consistent styling across all pages
  - Mobile-friendly responsive layout

- **Profile Management**
  - User profile display
  - Avatar with photo upload capability
  - Account settings interface

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **UI Library:** Material-UI (MUI)
- **Routing:** React Router v6
- **Form Management:** React Hook Form
- **Validation:** Zod
- **Build Tool:** Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/mazam5/popx-frontend
cd popx-frontend
```

1. Install dependencies:

```bash
npm install
# or
yarn install
```

1. Create environment file (optional):

```bash
cp .env.example .env
```

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

1. Open your browser and navigate to:

```bash
http://localhost:5173
```

## 📁 Project Structure

```bash
src/
├── pages/
│   ├── LandingPage.tsx      # Landing/home page
│   ├── LoginPage.tsx         # User login page
│   ├── SignupPage.tsx        # User registration page
│   ├── ProfilePage.tsx       # User profile page
│   └── ProtectedRoute.tsx    # Route protection wrapper
├── providers/
│   ├── AuthProvider.tsx      # Authentication context provider
│   └── MUIThemeProvider.tsx  # MUI theme configuration
├── App.tsx                   # Main app component with routing
└── main.tsx                  # Application entry point
```

## 🎨 Key Components

### Authentication Provider

Manages user authentication state across the application using React Context API.

### MUI Theme Provider

Custom theme configuration with:

- Purple primary color (#6c63ff)
- Rubik font family
- Custom component styles for buttons and text fields
- Consistent input label positioning

### Protected Routes

Ensures only authenticated users can access certain pages (e.g., profile page).

## 📝 Form Validation Schema

### Login Form

- **Email:** Must be a valid email address
- **Password:** Minimum 8 characters

### Signup Form

- **Full Name:** Minimum 3 characters
- **Phone Number:** Minimum 10 characters
- **Email:** Must be a valid email address
- **Password:** Minimum 8 characters
- **Company Name:** Optional
- **Agency Status:** Required boolean selection

## 🔐 Authentication Flow

1. User submits signup/login form
2. Form validation occurs via Zod schema
3. On success, a dummy token is generated (UUID v4 format)
4. User data and token are stored in:
   - Application state (Context API)
   - localStorage for persistence
5. User is redirected to profile page
6. Protected routes check for valid authentication

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run format       # Format code
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔄 Future Enhancements

- [ ] Connect to real backend API
- [ ] Implement actual image upload functionality
- [ ] Add password reset flow
- [ ] Implement refresh token mechanism
- [ ] Add unit and integration tests
- [ ] Add form field confirmation (e.g., confirm password)
- [ ] Implement email verification
- [ ] Add OAuth providers (Google, GitHub, etc.)

## 🐛 Known Issues

- Currently using dummy token generation (replace with actual API)
- localStorage is used for session management (consider more secure alternatives)
- No actual image upload backend integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Note:** This is a frontend-only application. For production use, integrate with a secure backend API for authentication and data management.
