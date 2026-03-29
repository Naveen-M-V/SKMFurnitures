'use client'

import { TreePine, Sparkles, Truck, Wrench, CreditCard, Award, IndianRupee, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: TreePine,
    title: 'Durable Materials',
    description: 'Genuine teak, rosewood & sheesham sourced from trusted plantations',
  },
  {
    icon: Sparkles,
    title: 'Elegant Designs',
    description: 'Traditional carved patterns meet sleek contemporary aesthetics',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    description: 'Free delivery & installation across Tirunelveli district',
  },
  {
    icon: Wrench,
    title: 'After-Sales Support',
    description: 'Dedicated service team for repairs, polishing & maintenance',
  },
  {
    icon: CreditCard,
    title: 'Budget-Friendly',
    description: 'Flexible EMI plans with 0% interest on select products',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handpicked teak & rosewood with 10-year durability guarantee',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Factory-direct prices with easy EMI options for every family',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: '10,000+ happy families across Tirunelveli trust us',
  },
  {
    icon: Clock,
    title: '25+ Years Legacy',
    description: 'Serving Tamil Nadu families with pride since 1998',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-skm-brown to-skm-brown-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-skm-gold text-lg font-semibold mb-2">Our Promise</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose SKM Furniture World
          </h2>
          <div className="w-24 h-1 bg-skm-gold mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
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
      </div>
    </section>
  )
}
