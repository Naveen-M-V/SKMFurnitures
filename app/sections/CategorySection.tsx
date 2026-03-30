'use client'

import { Bed, Sofa, UtensilsCrossed, Briefcase, Baby, PenTool, ArrowUpRight } from 'lucide-react'

const categories = [
  {
    icon: Bed,
    title: 'Bedroom',
    subtitle: 'Furniture',
    count: '50+',
    description: 'Sculptural beds and wardrobes that transform your sanctuary into a gallery of comfort.',
  },
  {
    icon: Sofa,
    title: 'Living',
    subtitle: 'Spaces',
    count: '40+',
    description: 'Statement seating that commands attention and invites endless conversation.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dining',
    subtitle: 'Experience',
    count: '30+',
    description: 'Where culinary artistry meets architectural brilliance in every gathering.',
  },
  {
    icon: Briefcase,
    title: 'Executive',
    subtitle: 'Office',
    count: '25+',
    description: 'Powerful workspaces designed for visionaries who shape tomorrow.',
  },
  {
    icon: Baby,
    title: 'Junior',
    subtitle: 'Collection',
    count: '20+',
    description: 'Playful elegance for the next generation of design enthusiasts.',
  },
  {
    icon: PenTool,
    title: 'Bespoke',
    subtitle: 'Creations',
    count: '∞',
    description: 'Your vision, our craftsmanship. Limitless possibilities await.',
  },
]

export default function CategorySection() {
  return (
    <section id="categories" className="section-padding bg-skm-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-skm-scarlet/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-skm-royal/5 rounded-full blur-3xl" />
      
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-skm-scarlet" />
              <span className="text-xs uppercase tracking-[0.3em] text-skm-silver font-medium">
                The Collection
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-skm-text leading-[0.9]">
              Curated
              <span className="block text-skm-scarlet italic font-light">Categories</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-skm-text-muted/70 leading-relaxed font-light">
              Each piece is a statement of intent. Discover furniture that transcends 
              function to become art in your space.
            </p>
          </div>
        </div>

        {/* Categories Grid - Editorial Magazine Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group glass-card-hover p-8 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-skm-scarlet/0 to-skm-royal/0 group-hover:from-skm-scarlet/10 group-hover:to-skm-royal/5 transition-all duration-700" />
              
              <div className="relative z-10">
                {/* Top Row: Number & Icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-6xl font-serif font-bold text-skm-text/10 group-hover:text-skm-scarlet/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 border border-skm-border rounded-none flex items-center justify-center group-hover:border-skm-scarlet group-hover:bg-skm-scarlet/10 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-skm-text-muted group-hover:text-skm-scarlet transition-colors" />
                  </div>
                </div>

                {/* Title Block */}
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-skm-text group-hover:text-skm-scarlet transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-lg text-skm-text-muted/60 italic font-light">
                    {category.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-skm-text-muted/70 leading-relaxed mb-8 font-light">
                  {category.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-skm-border">
                  <div>
                    <span className="text-3xl font-serif font-bold text-skm-scarlet">{category.count}</span>
                    <span className="text-xs text-skm-text-muted/50 uppercase tracking-widest ml-2">Designs</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-skm-text-muted/30 group-hover:text-skm-scarlet group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-skm-border">
          <p className="text-skm-text-muted/60 text-sm">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a 
            href="#contact" 
            className="group flex items-center gap-3 text-skm-text text-sm font-semibold uppercase tracking-widest hover:text-skm-scarlet transition-colors"
          >
            Request Custom Design
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
