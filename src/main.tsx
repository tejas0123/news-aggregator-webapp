import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInForm from './components/Auth/SignInForm.tsx';
import SignUpForm from './components/SignUpForm/SignUpForm.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
