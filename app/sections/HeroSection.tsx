'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { supabase, supabaseConfigured, HeroImage } from '@/lib/supabaseClient'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const fallbackImages: HeroImage[] = [
  { id: '1', image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80', status: 'approved', created_at: '' },
  { id: '2', image_url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1920&q=80', status: 'approved', created_at: '' },
  { id: '3', image_url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=80', status: 'approved', created_at: '' },
]

export default function HeroSection() {
  const [heroImages, setHeroImages] = useState<HeroImage[]>(fallbackImages)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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
      }, 5000)
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
      setError('Failed to load hero images')
      setLoading(false)
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // Fallback background gradient if no images
  const fallbackBg = 'bg-gradient-to-br from-skm-red via-skm-red-dark to-gray-900'

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image or Gradient */}
      <div className="absolute inset-0">
        {heroImages.length > 0 ? (
          heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.image_url}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))
        ) : (
          <div className={`absolute inset-0 ${fallbackBg}`} />
        )}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transform Your Home with{' '}
              <span className="text-skm-red-light">Timeless Comfort</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Discover premium furniture crafted with excellence. From elegant sofas to 
              custom bedroom sets, we bring luxury and comfort to every corner of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#showrooms" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-skm-red-dark transition-all text-center">
                Visit Showroom
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {heroImages.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-skm-red-light w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
