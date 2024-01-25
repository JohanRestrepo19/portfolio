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
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    );

  return (
    <Button size="icon" variant="outline" onClick={handleToggleTheme}>
      {Icon}
    </Button>
  );
};

export default ThemeToggle;
