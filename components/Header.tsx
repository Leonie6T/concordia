'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rules', label: 'Rules' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-navy shadow-xl border-b border-navy-light'
        : 'py-4 bg-white/90 backdrop-blur-md'
        }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <span className={`text-xl font-extrabold hidden sm:block transition-colors ${scrolled ? 'text-white' : 'text-navy'} group-hover:text-terracotta`}>
              Concordia House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-300 relative group ${scrolled ? 'text-white hover:text-terracotta' : 'text-navy hover:text-terracotta'}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/incident"
              className={`text-xs font-semibold transition-colors flex items-center gap-1 ml-4 ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-navy'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Report Incident
            </Link>
            <Link
              href="/apply"
              className="bg-terracotta hover:bg-terracotta-dark text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ml-2"
            >
              Apply / Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 focus:outline-none rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-navy-light' : 'text-navy hover:bg-gray-100'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-navy font-semibold hover:text-terracotta hover:bg-gray-50 transition-all rounded-lg px-4 py-3"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/incident"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-terracotta hover:bg-gray-50 transition-all rounded-lg px-4 py-3"
                >
                  Report Incident
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

