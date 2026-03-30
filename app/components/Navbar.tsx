'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#categories', label: 'Collection' },
    { href: '#showrooms', label: 'Showrooms' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-skm-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo Image */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-16 w-auto">
                <Image 
                  src="/logo.jpeg" 
                  alt="SKM Furniture World"
                  width={160}
                  height={64}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-skm-text-muted hover:text-skm-text transition-colors duration-300 uppercase tracking-widest group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-skm-scarlet group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+919442569766"
                className="flex items-center space-x-2 text-sm text-skm-text-muted hover:text-skm-text transition-colors"
              >
                <Phone size={14} />
                <span className="tracking-wider">+91 94425 69766</span>
              </a>
              <Link
                href="#contact"
                className="px-6 py-3 bg-skm-scarlet text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-skm-scarlet-light transition-all duration-300"
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-skm-text hover:text-skm-scarlet transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl md:text-4xl font-serif font-bold text-skm-text hover:text-skm-scarlet transition-all duration-300"
              style={{ 
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919442569766"
            className="mt-8 px-8 py-4 bg-skm-scarlet text-white text-sm font-semibold uppercase tracking-widest"
            style={{ 
              transitionDelay: isOpen ? '400ms' : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            Call Now
          </a>
        </div>
      </div>
    </>
  )
}
