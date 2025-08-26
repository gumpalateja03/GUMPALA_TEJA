"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            YourName
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-foreground/80 hover:text-primary transition-colors ${
                  pathname === link.path ? 'text-primary font-medium' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`py-2 text-foreground/80 hover:text-primary transition-colors ${
                      pathname === link.path ? 'text-primary font-medium' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 border-t border-border">
                  <ModeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-foreground/80"> 2023 YourName. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:your.email@example.com" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
