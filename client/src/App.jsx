import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import HeroSection from './components/HeroSection';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-primary-light dark:bg-gradient-to-r dark:from-primary-dark dark:to-secondary-dark transition-colors duration-500">
      <Routes>
        <Route path="/" element={<Login setDarkMode={setDarkMode} />} />
        <Route path="/login" element={<Login setDarkMode={setDarkMode} />} />
        <Route path="/hero-section" element={<HeroSection setDarkMode={setDarkMode} />} />
        <Route path="/dashboard" element={<Dashboard setDarkMode={setDarkMode} />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
