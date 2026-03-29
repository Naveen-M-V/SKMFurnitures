'use client'

import { Bed, Sofa, UtensilsCrossed, Briefcase, Baby, PenTool } from 'lucide-react'

const categories = [
  {
    icon: Bed,
    title: 'Bedroom Furniture',
    count: '50+ designs',
    description: 'Elegant beds, wardrobes, and dressing tables for your sanctuary.',
  },
  {
    icon: Sofa,
    title: 'Sofas & Recliners',
    count: '40+ designs',
    description: 'Luxurious seating options for ultimate relaxation and style.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dining Sets',
    count: '30+ designs',
    description: 'Beautiful dining tables and chairs for memorable gatherings.',
  },
  {
    icon: Briefcase,
    title: 'Office Furniture',
    count: '25+ designs',
    description: 'Ergonomic desks, chairs, and storage for productive workspaces.',
  },
  {
    icon: Baby,
    title: 'Kids Furniture',
    count: '20+ designs',
    description: 'Safe, fun, and functional furniture designed for little ones.',
  },
  {
    icon: PenTool,
    title: 'Custom Furniture',
    count: 'Made to order',
    description: 'Bespoke designs crafted to match your unique vision and space.',
  },
]

export default function CategorySection() {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-skm-red-dark mb-4">
            Our Furniture Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium furniture designed to transform every space in your home
          </p>
          <div className="w-24 h-1 bg-skm-red mx-auto mt-6" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-skm-cream rounded-xl p-8 card-hover border border-skm-warm/50 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-skm-red rounded-xl flex items-center justify-center group-hover:bg-skm-red-light transition-colors duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-skm-red-dark mb-1 group-hover:text-skm-red transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-skm-red font-semibold mb-2">
                    {category.count}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
