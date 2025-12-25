import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './pages/ProtectedRoute';
import SignupPage from './pages/SignupPage';
import AuthProvider from './providers/AuthProvider';
import MUIThemeProvider from './providers/MUIThemeProvider';

function App() {
  return (
    <>
      <MUIThemeProvider>
        <AuthProvider>
          <Container maxWidth="sm">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </Container>
        </AuthProvider>
      </MUIThemeProvider>
    </>
  );
}

export default App;
