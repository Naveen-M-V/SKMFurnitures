'use client'

import { TreePine, Sparkles, Truck, Wrench, CreditCard, Award, IndianRupee, Users, Clock, Star } from 'lucide-react'

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-skm-bg-alt relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-skm-scarlet/5 via-skm-bg-alt to-skm-royal/5" />
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
              <line x1="0" y1="40" x2="40" y2="0" stroke="black" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header - Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-skm-scarlet font-medium">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-skm-text leading-[0.9]">
              The SKM
              <span className="block text-skm-scarlet italic font-light"> Difference</span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
            <p className="text-xl text-skm-text/80 leading-relaxed font-light mb-8">
              We don&apos;t merely create furniture; we sculpt experiences. 
              Each piece is a testament to our unwavering commitment to 
              excellence, blending heritage craftsmanship with visionary design.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-24 bg-skm-scarlet" />
              <span className="text-sm text-skm-text/60 uppercase tracking-widest">
                Since 1998
              </span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          {/* Row 1: 2 regular cards + 1 featured (span 2) */}
          <div className="group relative p-6 border border-skm-border hover:border-skm-scarlet/30 transition-all duration-500 bg-white/50 hover:bg-white/80">
            <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">01</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-skm-scarlet/30 flex items-center justify-center mb-4 group-hover:bg-skm-scarlet/10 transition-all duration-300">
                <TreePine className="w-4 h-4 text-skm-scarlet" />
              </div>
              <h3 className="text-lg font-serif font-bold text-skm-text mb-1 group-hover:text-skm-scarlet transition-colors">Heritage Materials</h3>
              <span className="text-xs text-skm-text/70 uppercase tracking-widest">Authentic Craft</span>
              <p className="mt-3 text-sm text-skm-text/70 leading-relaxed font-light">Genuine teak, rosewood & sheesham sourced from centuries-old plantations</p>
            </div>
          </div>

          <div className="group relative p-6 border border-skm-border hover:border-skm-scarlet/30 transition-all duration-500 bg-white/50 hover:bg-white/80">
            <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">02</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-skm-scarlet/30 flex items-center justify-center mb-4 group-hover:bg-skm-scarlet/10 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-skm-scarlet" />
              </div>
              <h3 className="text-lg font-serif font-bold text-skm-text mb-1 group-hover:text-skm-scarlet transition-colors">Design Excellence</h3>
              <span className="text-xs text-skm-text/70 uppercase tracking-widest">Avant-Garde</span>
              <p className="mt-3 text-sm text-skm-text/70 leading-relaxed font-light">Where traditional artistry converges with contemporary minimalism</p>
            </div>
          </div>

          {/* Featured Card 1: Quarter Century - Spans 2 columns */}
          <div className="md:col-span-2 group relative p-8 border border-skm-scarlet/20 bg-gradient-to-br from-skm-scarlet/10 via-white/50 to-transparent hover:from-skm-scarlet/15 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-skm-scarlet/10 rounded-full blur-2xl group-hover:bg-skm-scarlet/20 transition-all" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-skm-scarlet/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-skm-scarlet" />
                  </div>
                  <Star className="w-4 h-4 text-skm-scarlet fill-skm-scarlet" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-skm-text mb-1">Quarter Century</h3>
                <span className="text-sm text-skm-text/70 uppercase tracking-widest">Legacy</span>
                <p className="mt-4 text-skm-text/70 leading-relaxed font-light">Crafting excellence since 1998. Over 25 years of trusted craftsmanship.</p>
              </div>
              <div className="text-center md:text-right">
                <span className="block text-5xl font-serif font-bold text-skm-scarlet">25+</span>
                <span className="text-xs text-skm-text/60 uppercase tracking-widest">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Row 2: 1 featured (span 2) + 2 regular cards */}
          {/* Featured Card 2: Discerning Clientele - Spans 2 columns */}
          <div className="md:col-span-2 group relative p-8 border border-skm-royal/20 bg-gradient-to-br from-skm-royal/10 via-white/50 to-transparent hover:from-skm-royal/15 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-skm-royal/10 rounded-full blur-2xl group-hover:bg-skm-royal/20 transition-all" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-skm-royal/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-skm-royal" />
                  </div>
                  <Star className="w-4 h-4 text-skm-royal fill-skm-royal" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-skm-text mb-1">Discerning Clientele</h3>
                <span className="text-sm text-skm-text/70 uppercase tracking-widest">Clientele</span>
                <p className="mt-4 text-skm-text/70 leading-relaxed font-light">Over 10,000 satisfied patrons across Tamil Nadu trust our expertise.</p>
              </div>
              <div className="text-center md:text-right">
                <span className="block text-5xl font-serif font-bold text-skm-royal">10K+</span>
                <span className="text-xs text-skm-text/60 uppercase tracking-widest">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="group relative p-6 border border-skm-border hover:border-skm-scarlet/30 transition-all duration-500 bg-white/50 hover:bg-white/80">
            <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">03</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-skm-scarlet/30 flex items-center justify-center mb-4 group-hover:bg-skm-scarlet/10 transition-all duration-300">
                <Truck className="w-4 h-4 text-skm-scarlet" />
              </div>
              <h3 className="text-lg font-serif font-bold text-skm-text mb-1 group-hover:text-skm-scarlet transition-colors">White Glove</h3>
              <span className="text-xs text-skm-text/70 uppercase tracking-widest">Delivery</span>
              <p className="mt-3 text-sm text-skm-text/70 leading-relaxed font-light">Complimentary delivery & precision installation</p>
            </div>
          </div>

          <div className="group relative p-6 border border-skm-border hover:border-skm-scarlet/30 transition-all duration-500 bg-white/50 hover:bg-white/80">
            <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">04</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-skm-scarlet/30 flex items-center justify-center mb-4 group-hover:bg-skm-scarlet/10 transition-all duration-300">
                <Wrench className="w-4 h-4 text-skm-scarlet" />
              </div>
              <h3 className="text-lg font-serif font-bold text-skm-text mb-1 group-hover:text-skm-scarlet transition-colors">Lifetime</h3>
              <span className="text-xs text-skm-text/70 uppercase tracking-widest">Care</span>
              <p className="mt-3 text-sm text-skm-text/70 leading-relaxed font-light">Dedicated artisans for repairs & restoration</p>
            </div>
          </div>

          {/* Row 3: 2 regular cards + 1 featured (span 2) */}
          <div className="group relative p-6 border border-skm-border hover:border-skm-scarlet/30 transition-all duration-500 bg-white/50 hover:bg-white/80">
            <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">05</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-skm-scarlet/30 flex items-center justify-center mb-4 group-hover:bg-skm-scarlet/10 transition-all duration-300">
                <CreditCard className="w-4 h-4 text-skm-scarlet" />
              </div>
              <h3 className="text-lg font-serif font-bold text-skm-text mb-1 group-hover:text-skm-scarlet transition-colors">Flexible</h3>
              <span className="text-xs text-skm-text/70 uppercase tracking-widest">Finance</span>
              <p className="mt-3 text-sm text-skm-text/70 leading-relaxed font-light">Premium EMI plans with preferential rates</p>
            </div>
          </div>

          <div className="group relative p-6 border border-skm-border hover:border-skm-scarlet/30 transition-all duration-500 bg-white/50 hover:bg-white/80">
            <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">06</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-skm-scarlet/30 flex items-center justify-center mb-4 group-hover:bg-skm-scarlet/10 transition-all duration-300">
                <Award className="w-4 h-4 text-skm-scarlet" />
              </div>
              <h3 className="text-lg font-serif font-bold text-skm-text mb-1 group-hover:text-skm-scarlet transition-colors">Master</h3>
              <span className="text-xs text-skm-text/70 uppercase tracking-widest">Craftsmanship</span>
              <p className="mt-3 text-sm text-skm-text/70 leading-relaxed font-light">Hand-selected materials with decade-long guarantees</p>
            </div>
          </div>

          {/* Featured Card 3: Direct Pricing - Spans 2 columns */}
          <div className="md:col-span-2 group relative p-8 border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-white/50 to-transparent hover:from-amber-500/15 transition-all duration-500 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-amber-600" />
                  </div>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-skm-text mb-1">Direct</h3>
                <span className="text-sm text-skm-text/70 uppercase tracking-widest">Pricing</span>
                <p className="mt-4 text-skm-text/70 leading-relaxed font-light">Factory-direct excellence without intermediary markups or hidden costs.</p>
              </div>
              <div className="text-center md:text-right">
                <span className="block text-5xl font-serif font-bold text-amber-600">0%</span>
                <span className="text-xs text-skm-text/60 uppercase tracking-widest">Middlemen Markup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 pt-12 border-t border-skm-border text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-skm-text/80 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Furniture is not just about function. It is about creating 
            <span className="text-skm-scarlet not-italic font-bold"> moments </span> 
            that last a lifetime.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-skm-scarlet" />
            <span className="text-sm text-skm-text/60 uppercase tracking-widest">SKM Founders</span>
            <div className="w-12 h-px bg-skm-scarlet" />
          </div>
        </div>
      </div>
    </section>
  )
}
