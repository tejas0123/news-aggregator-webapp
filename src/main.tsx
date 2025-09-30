import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInForm from './components/Auth/SignInForm.tsx';
import SignUpForm from './components/SignUpForm/SignUpForm.tsx';
import { AuthProvider } from './hooks/useAuth.tsx';
import ServerInfo from './components/ServerInfo/ServerInfo.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/servers" element={<ServerInfo />} />
        </Routes>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
