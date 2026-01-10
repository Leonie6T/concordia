'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rules', label: 'Living Rules' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50'
        : 'py-6 bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-50">
            <span className={`font-serif font-bold tracking-tight text-navy transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'
              }`}>
              Concordia House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy/80 hover:text-terracotta font-medium text-sm tracking-wide transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta/30 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}

              {/* Secondary Action: Incident Report */}
              <Link
                href="/incident"
                className="text-xs font-medium text-gray-400 hover:text-navy transition-colors flex items-center gap-1 group"
              >
                <svg className="w-3 h-3 group-hover:text-terracotta transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Report Icon
              </Link>
            </div>

            {/* Separator */}
            <div className={`h-6 w-px bg-gray-200 ${scrolled ? 'opacity-100' : 'opacity-50'}`}></div>

            {/* Primary CTA */}
            <Link
              href="/apply"
              className="group relative px-6 py-2.5 bg-terracotta text-white text-sm font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-terracotta/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative flex items-center gap-2">
                Join Waitlist
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-navy hover:bg-gray-100/50 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col pt-24 px-8 pb-8"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-navy hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <hr className="border-gray-100" />

                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-terracotta text-white text-center font-bold rounded-xl shadow-lg hover:bg-terracotta-dark transition-colors"
                >
                  Join Waitlist
                </Link>

                <div className="mt-auto">
                  <Link
                    href="/incident"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm text-gray-400 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Report Incident
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
