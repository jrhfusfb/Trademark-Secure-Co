import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index8Page from './pages/Index8Page';
import Index7Page from './pages/Index7Page';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page (V8) */}
        <Route path="/" element={<Index8Page />} />

        {/* Alternative landing page (V7) */}
        <Route path="/v7" element={<Index7Page />} />

        {/* Admin Leads Panel */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
