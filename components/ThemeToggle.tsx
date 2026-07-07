'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 transition-colors hover:bg-navy-900/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
