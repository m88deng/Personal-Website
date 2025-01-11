import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  // Apply theme dynamically
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--color-background', '#02050a');
      root.style.setProperty('--color-foreground', '#f3f3f3');
      root.style.setProperty('--color-highlight', '#003282');
      root.style.setProperty('--color-header', '#000000');
      root.style.setProperty('--color-icon', '#bac5e3');
    } else {
      root.style.setProperty('--color-background', '#ffffff');
      root.style.setProperty('--color-foreground', '#000000');
      root.style.setProperty('--color-highlight', '#0078d4');
      root.style.setProperty('--color-header', '#f3f3f3');
      root.style.setProperty('--color-icon', '#000000');
    }
  }, [isDarkMode]);

  // Handle toggle
  const handleToggle = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Persist theme preference
      return newMode;
    });
  };

  return (
    <IconButton onClick={handleToggle} aria-label="toggle theme" className="mb-2">
      {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  );
}
