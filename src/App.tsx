import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { ContactModal } from './components/ContactModal';
import { PlatformProvider } from './contexts/PlatformContext';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  return (
    <PlatformProvider>
      <div className="min-h-screen bg-gradient-modern">
        <Header onGetStarted={handleGetStarted} />
        <main>
          <Hero onGetStarted={handleGetStarted} />
          <Features />
          <CTA onGetStarted={handleGetStarted} />
        </main>
        <footer className="bg-white/50 backdrop-blur-sm py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-gray-600">© 2024 Contextual. All rights reserved.</div>
            <Link 
              to="/admin/login"
              className="text-gray-600 hover:text-indigo-600 transition-colors text-sm"
            >
              Admin Login
            </Link>
          </div>
        </footer>
        <ContactModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </PlatformProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}