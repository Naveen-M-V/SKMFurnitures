'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#categories', label: 'Collection' },
  { href: '#showrooms', label: 'Showrooms' },
  { href: '#contact', label: 'Contact' },
]

const categories = [
  'Bedroom',
  'Living',
  'Dining',
  'Office',
  'Custom',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-skm-bg-alt border-t border-skm-border">
      {/* Main Footer */}
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <span className="text-4xl font-black tracking-tighter text-skm-text">
                SKM
              </span>
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-skm-text-muted font-light">
                Furniture
              </span>
            </div>
            <p className="text-skm-text-muted/60 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Redefining luxury furniture since 1998. Where visionary design 
              meets uncompromising craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 border border-skm-border flex items-center justify-center hover:border-skm-scarlet hover:bg-skm-scarlet/10 transition-all group"
              >
                <Instagram className="w-5 h-5 text-skm-text-muted group-hover:text-skm-scarlet transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-skm-border flex items-center justify-center hover:border-skm-scarlet hover:bg-skm-scarlet/10 transition-all group"
              >
                <Facebook className="w-5 h-5 text-skm-text-muted group-hover:text-skm-scarlet transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-widest text-skm-text-muted/50 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-skm-text-muted hover:text-skm-text transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-skm-text-muted/50 mb-6">Categories</h4>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#categories"
                    className="text-sm text-skm-text-muted hover:text-skm-text transition-colors inline-flex items-center gap-2 group"
                  >
                    {category}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-skm-text-muted/50 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-skm-scarlet mt-1 flex-shrink-0" />
                <span className="text-sm text-skm-text-muted/70 leading-relaxed">
                  14/2, Trivandram Road,<br />Murugankurichi, Tirunelveli - 627002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-skm-scarlet flex-shrink-0" />
                <a
                  href="tel:+919442569766"
                  className="text-sm text-skm-text-muted/70 hover:text-skm-text transition-colors"
                >
                  +91 94425 69766
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-skm-scarlet flex-shrink-0" />
                <a
                  href="mailto:hello@skmfurniture.com"
                  className="text-sm text-skm-text-muted/70 hover:text-skm-text transition-colors"
                >
                  hello@skmfurniture.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-skm-border">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-skm-text-muted/40 text-xs uppercase tracking-widest">
              © {currentYear} SKM Furniture World. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-skm-text-muted/40 uppercase tracking-widest">
              <a href="#" className="hover:text-skm-text transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-skm-text transition-colors">
                Terms
              </a>
              <a href="/admin" className="hover:text-skm-text transition-colors">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
