'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isClient, setIsClient] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  function handleToggleTheme() {
    if (resolvedTheme === 'light') setTheme('dark');
    else setTheme('light');
  }

  const Icon =
    resolvedTheme === 'light' ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" fill="none" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" fill="none" />
    );

  return (
    <Button
      size="icon"
      onClick={handleToggleTheme}
      className="bg-[#c4a7e7] hover:bg-purple-700 dark:bg-[#f6c177] dark:hover:bg-orange-300"
    >
      {Icon}
    </Button>
  );
};

export default ThemeToggle;
