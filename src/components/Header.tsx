import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { smoothScrollTo } from '../utils/smoothScroll';

const navigationLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Certifications', href: 'certifications' },
  { name: 'Contact', href: 'contact' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(navigationLinks.map(link => link.href));

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-lg sm:text-xl text-white drop-shadow-lg cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 drop-shadow-sm ${
                  activeSection === link.href
                    ? 'text-blue-300 dark:text-blue-400'
                    : 'text-white/90 dark:text-gray-300 hover:text-blue-300 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200 touch-manipulation border border-white/20 dark:border-gray-700/30"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-200 touch-manipulation border border-white/20 dark:border-gray-700/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 dark:bg-gray-900/90 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50"
          >
            <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 touch-manipulation ${
                    activeSection === link.href
                      ? 'text-blue-300 dark:text-blue-400 bg-white/10 dark:bg-blue-900/30 backdrop-blur-sm'
                      : 'text-white/90 dark:text-gray-300 hover:text-blue-300 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}