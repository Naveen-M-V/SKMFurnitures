'use client'

import { Award, DollarSign, Palette, Truck, Shield, Users } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Premium Quality Materials',
    description: 'We use only the finest solid wood, premium fabrics, and durable hardware for furniture that lasts generations.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Direct-from-manufacturer pricing ensures you get luxury quality without the luxury markup.',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Have a unique vision? Our craftsmen can create bespoke pieces tailored to your exact specifications.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary delivery and professional assembly within city limits on all orders above ₹25,000.',
  },
  {
    icon: Shield,
    title: 'Warranty Support',
    description: 'Every piece comes with a comprehensive 5-year warranty and lifetime service support.',
  },
  {
    icon: Users,
    title: 'Trusted by Customers',
    description: 'Over 50,000 happy families have trusted SKM Furniture for their dream homes.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-skm-brown to-skm-brown-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose SKM Furniture?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern design to deliver furniture that exceeds expectations
          </p>
          <div className="w-24 h-1 bg-skm-gold mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="w-14 h-14 bg-skm-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-skm-brown-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '50K+', label: 'Happy Customers' },
            { number: '200+', label: 'Designs Available' },
            { number: '5', label: 'Showroom Locations' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-skm-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
