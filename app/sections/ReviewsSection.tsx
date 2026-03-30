'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { supabase, supabaseConfigured, Review } from '@/lib/supabaseClient'

const defaultReviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    review_text: 'The attention to detail is extraordinary. Our living room has been transformed into a gallery of comfort and style.',
    rating: 5,
    status: 'approved',
    created_at: '2024-01-15',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    review_text: 'A masterclass in craftsmanship. The bespoke bedroom suite exceeded every expectation we had.',
    rating: 5,
    status: 'approved',
    created_at: '2024-01-10',
  },
  {
    id: '3',
    name: 'Amit Patel',
    review_text: 'Where luxury meets functionality. The dining ensemble has become the centerpiece of our home.',
    rating: 5,
    status: 'approved',
    created_at: '2024-01-05',
  },
]

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (supabaseConfigured) {
      fetchReviews()
    }
  }, [])

  async function fetchReviews() {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (error) throw error
      if (data && data.length > 0) {
        setReviews(data)
      }
    } catch (err) {
      console.error('Error fetching reviews:', err)
    }
  }

  const displayReviews = reviews

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length)
  }

  return (
    <section className="section-padding bg-skm-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-skm-scarlet/5 rounded-full blur-3xl" />
      
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-skm-scarlet font-medium">
            Testimonials
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-skm-text mt-6 leading-[0.9]">
            Client
            <span className="text-skm-scarlet italic font-light"> Voices</span>
          </h2>
        </div>

        {/* Reviews Carousel - Editorial Style */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="glass-card p-8 md:p-16 relative">
            {/* Quote Mark */}
            <Quote className="absolute top-8 left-8 w-16 h-16 text-skm-scarlet/20" />
            
            {displayReviews.length > 0 && (
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < displayReviews[currentIndex].rating
                          ? 'text-skm-scarlet fill-skm-scarlet'
                          : 'text-skm-border'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-skm-text leading-relaxed mb-12">
                    &ldquo;{displayReviews[currentIndex].review_text}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-px bg-skm-scarlet mx-auto mb-6" />
                  <h4 className="text-lg font-semibold text-skm-text uppercase tracking-widest">
                    {displayReviews[currentIndex].name}
                  </h4>
                  <p className="text-sm text-skm-text-muted/50 mt-2 uppercase tracking-widest">
                    Verified Patron
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          {displayReviews.length > 1 && (
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevReview}
                className="group flex items-center gap-3 text-skm-text-muted hover:text-skm-text transition-colors"
              >
                <div className="w-12 h-12 border border-skm-border flex items-center justify-center group-hover:border-skm-scarlet group-hover:bg-skm-scarlet/10 transition-all">
                  <ChevronLeft size={20} />
                </div>
                <span className="text-sm uppercase tracking-widest hidden sm:block">Previous</span>
              </button>

              {/* Indicators */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-skm-text-muted/50 font-mono">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  {displayReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 transition-all duration-300 ${
                        index === currentIndex ? 'w-8 bg-skm-scarlet' : 'w-2 bg-skm-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-skm-text-muted/50 font-mono">
                  {String(displayReviews.length).padStart(2, '0')}
                </span>
              </div>

              <button
                onClick={nextReview}
                className="group flex items-center gap-3 text-skm-text-muted hover:text-skm-text transition-colors"
              >
                <span className="text-sm uppercase tracking-widest hidden sm:block">Next</span>
                <div className="w-12 h-12 border border-skm-border flex items-center justify-center group-hover:border-skm-scarlet group-hover:bg-skm-scarlet/10 transition-all">
                  <ChevronRight size={20} />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
