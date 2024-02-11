'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={resolvedTheme}
        initial={{ rotateY: 90 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="icon"
          onClick={handleToggleTheme}
          className="bg-[#c4a7e7] hover:bg-purple-700 dark:bg-[#f6c177] dark:hover:bg-orange-300"
        >
          {Icon}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggle;
