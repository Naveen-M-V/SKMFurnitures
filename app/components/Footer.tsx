'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#categories', label: 'Categories' },
  { href: '#showrooms', label: 'Showrooms' },
  { href: '#contact', label: 'Contact' },
  { href: '/admin', label: 'Admin Login' },
]

const categories = [
  'Bedroom Furniture',
  'Living Room',
  'Dining Sets',
  'Office Furniture',
  'Custom Orders',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-skm-brown-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <div className="h-16 w-auto flex items-center justify-start">
                <img 
                  src="/logo.jpeg" 
                  alt="SKM Furniture World"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="h-10 w-10 bg-skm-gold rounded flex items-center justify-center text-skm-brown-dark font-bold text-lg">S</div>';
                  }}
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming homes with premium quality furniture since 2009. Your comfort is our commitment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-skm-gold hover:text-skm-brown-dark transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-skm-gold hover:text-skm-brown-dark transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-skm-gold hover:text-skm-brown-dark transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-skm-gold hover:text-skm-brown-dark transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-skm-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-skm-gold">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#categories"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-skm-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-skm-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Main Road, T. Nagar,<br />Chennai - 600017, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-skm-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-skm-gold flex-shrink-0" />
                <a
                  href="mailto:info@skmfurniture.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@skmfurniture.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SKM Furniture World. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
