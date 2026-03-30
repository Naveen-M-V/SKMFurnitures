'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { supabase, supabaseConfigured, HeroImage } from '@/lib/supabaseClient'
import { ArrowDown } from 'lucide-react'

const fallbackImages: HeroImage[] = [
  { id: '1', image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=80', status: 'approved', created_at: '' },
  { id: '2', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80', status: 'approved', created_at: '' },
  { id: '3', image_url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1920&q=80', status: 'approved', created_at: '' },
]

export default function HeroSection() {
  const [heroImages, setHeroImages] = useState<HeroImage[]>(fallbackImages)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (supabaseConfigured) {
      fetchHeroImages()
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [heroImages])

  async function fetchHeroImages() {
    try {
      const { data, error } = await supabase
        .from('hero_images')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (error) throw error
      setHeroImages(data || [])
      setLoading(false)
    } catch (err: any) {
      setLoading(false)
    }
  }

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-skm-bg">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-2000 ${
              index === currentIndex ? 'opacity-20 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <Image
              src={image.image_url}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-skm-bg via-skm-bg/90 to-skm-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-skm-scarlet/5 via-transparent to-skm-royal/5" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Main Content - Asymmetric Editorial Layout */}
      <div className="relative h-screen flex items-center">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Typography */}
            <div className="lg:col-span-5 z-10 order-2 lg:order-1">
              {/* Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-skm-scarlet" />
                <span className="text-xs uppercase tracking-[0.3em] text-skm-text/70 font-medium">
                  Est. 1998
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-serif font-black text-skm-text leading-[0.9] tracking-tight mb-8">
                <span className="block text-6xl md:text-7xl lg:text-8xl">SKM</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-skm-text/80 font-light italic mt-2">
                  Furniture
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4">
                  <span className="text-skm-scarlet">World</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-skm-text/80 leading-relaxed max-w-md mb-10 font-light">
                Redefining luxury living with avant-garde furniture design. 
                Where craftsmanship meets contemporary artistry.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#categories" 
                  className="group flex items-center gap-3 px-8 py-4 bg-skm-scarlet text-white text-sm font-semibold uppercase tracking-widest hover:bg-skm-scarlet-light transition-all duration-300"
                >
                  Explore
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-12 mt-16 pt-8 border-t border-skm-border">
                <div>
                  <span className="block text-3xl md:text-4xl font-serif font-bold text-skm-text">25+</span>
                  <span className="text-xs uppercase tracking-widest text-skm-text/70 mt-1">Years</span>
                </div>
                <div>
                  <span className="block text-3xl md:text-4xl font-serif font-bold text-skm-scarlet">4</span>
                  <span className="text-xs uppercase tracking-widest text-skm-text/70 mt-1">Showrooms</span>
                </div>
                <div>
                  <span className="block text-3xl md:text-4xl font-serif font-bold text-skm-text">10K+</span>
                  <span className="text-xs uppercase tracking-widest text-skm-text/70 mt-1">Clients</span>
                </div>
              </div>
            </div>

            {/* Right Column - Floating Image */}
            <div className="lg:col-span-7 relative h-[50vh] lg:h-[70vh] order-1 lg:order-2">
              {/* Floating Chair Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full float-slow">
                  <Image
                    src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
                    alt="Luxury Designer Chair"
                    fill
                    className="object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 50px 100px rgba(255, 26, 26, 0.2))'
                    }}
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 glass-card px-6 py-4 float-medium">
                <span className="text-xs uppercase tracking-widest text-skm-text/70">New Collection</span>
                <span className="block text-2xl font-serif font-bold text-skm-text mt-1">2024</span>
              </div>

              {/* Circle Decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-skm-border rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-skm-royal/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
        <span className="text-xs uppercase tracking-widest text-skm-text/70">
          {String(currentIndex + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-skm-scarlet' : 'w-2 bg-skm-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 text-skm-text/70 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-skm-scarlet to-transparent" />
        <span className="text-xs uppercase tracking-widest rotate-90 origin-left translate-x-4">Scroll</span>
      </div>
    </section>
  )
}
