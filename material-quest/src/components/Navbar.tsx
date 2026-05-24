import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Trang chủ',   href: '#hero' },
  { label: 'Lịch sử',     href: '#timeline' },
  { label: 'Khái niệm',   href: '#ancient' },
  { label: 'Mô phỏng',    href: '#simulation' },
  { label: 'Quiz',        href: '#quiz' },
  { label: 'Tài liệu',    href: '#references' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-amber-400" />
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Material Quest
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${scrolled ? 'text-slate-600 hover:text-blue-900 hover:bg-blue-50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + theme toggle + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${scrolled
                  ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                  : 'text-white/80 hover:bg-white/10'}`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={() => scrollTo('#quiz')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold rounded-xl shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
              Bắt đầu học
            </button>
            <button onClick={() => setOpen(v => !v)} aria-label="Menu"
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-900 dark:hover:text-blue-300 transition-colors">
                  {link.label}
                </button>
              ))}
              <button onClick={() => scrollTo('#quiz')}
                className="w-full mt-2 px-4 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-400 transition-colors">
                Bắt đầu học
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
