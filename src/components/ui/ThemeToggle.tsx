'use client';

import { useThemeStore } from '@/store/themeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-sm font-medium transition"
    >
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
