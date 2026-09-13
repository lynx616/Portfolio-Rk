import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type='button'
      className='theme-toggle'
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      {isDark ? <Moon size={20} strokeWidth={1.8} /> : <Sun size={20} strokeWidth={1.8} />}
    </button>
  );
}

export default ThemeToggle;
