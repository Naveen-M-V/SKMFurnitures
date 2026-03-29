'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { supabase, supabaseConfigured, Review } from '@/lib/supabaseClient'

const defaultReviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    review_text: 'Excellent quality furniture! The sofa we bought has completely transformed our living room. Highly recommend SKM Furniture.',
    rating: 5,
    status: 'approved',
    created_at: '2024-01-15',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    review_text: 'Amazing customer service and beautiful designs. The custom bedroom set exceeded our expectations.',
    rating: 5,
    status: 'approved',
    created_at: '2024-01-10',
  },
  {
    id: '3',
    name: 'Amit Patel',
    review_text: 'Great value for money. The dining table is sturdy and elegant. Delivery was prompt and professional.',
    rating: 4,
    status: 'approved',
    created_at: '2024-01-05',
  },
]

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)

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
    <section className="section-padding bg-skm-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-skm-red-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from our valued customers who trust SKM Furniture
          </p>
          <div className="w-24 h-1 bg-skm-red mx-auto mt-6" />
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-skm-red/30" />
            
            {displayReviews.length > 0 && (
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < displayReviews[currentIndex].rating
                          ? 'text-skm-red fill-skm-red'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{displayReviews[currentIndex].review_text}"
                </p>

                {/* Reviewer Name */}
                <h4 className="text-xl font-bold text-skm-red-dark">
                  {displayReviews[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">Verified Customer</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          {displayReviews.length > 1 && (
            <>
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white shadow-lg rounded-full text-skm-red hover:bg-skm-red hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white shadow-lg rounded-full text-skm-red hover:bg-skm-red hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {displayReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-skm-red w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
