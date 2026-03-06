'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/lab', label: 'Lab' }
]

export const Header = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock scroll + ESC key close
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open])

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-background/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">

          {/* LOGO */}
          <Link
            href="/"
            className="font-display text-sm tracking-[0.24em] uppercase"
          >
            JIRAER<span className="text-highlight">·</span>ACHKARIAN
          </Link>

          {/* DESKTOP NAV */}
          <nav role="navigation" aria-label="Main" className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="relative">
                  <span
                    className={active ? 'text-foreground' : 'text-neutral-400'}
                  >
                    {item.label}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-[1px] w-full bg-highlight"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* MOBILE BURGER */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative h-6 w-6 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute left-0 top-1/2 h-[2px] w-full bg-foreground origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 h-[2px] w-full bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute left-0 top-1/2 h-[2px] w-full bg-foreground origin-center"
            />
          </button>
        </div>
      </header>

      {/* Animate Page Scale + Blur when mobile menu open */}
      <motion.div
        animate={open ? { scale: 0.97, filter: 'blur(2px)' } : { scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.4 }}
      >
        {children ?? null}
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* RIGHT PANEL */}
            {/* RIGHT PANEL */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.55, ease: [0.77, 0, 0.18, 1] }}
              className="fixed right-0 top-0 z-50 h-full w-[90vw] max-w-2xl bg-background border-l border-white/10 shadow-2xl"
            >
              {/* Accent Bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute right-0 top-0 h-full w-[4px] bg-highlight origin-top"
              />

              {/* Optional Noise Overlay */}
              <div className="absolute inset-0 opacity-10 bg-noise-texture pointer-events-none"></div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 z-50 h-10 w-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
                aria-label="Close Menu"
              >
                <motion.span
                  className="block h-[2px] w-6 bg-foreground origin-center absolute"
                  animate={{ rotate: 45 }}
                />
                <motion.span
                  className="block h-[2px] w-6 bg-foreground origin-center absolute"
                  animate={{ rotate: -45 }}
                />
              </button>

              {/* Nav Items */}
              <div className="flex h-full flex-col justify-center px-12 text-right relative">
                {navItems.map((item, i) => {
                  const active = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 80, opacity: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >

                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block py-8 text-5xl font-display tracking-[0.12em] uppercase transition-all duration-300 hover:scale-105 hover:text-highlight ${active ? 'text-highlight' : 'text-foreground'
                          }`}
                      >
                        {item.label}
                      </Link>

                      {/* Divider */}
                      <div className="border-t border-white/10 mt-2"></div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>          </>
        )}
      </AnimatePresence>
    </>
  )
}