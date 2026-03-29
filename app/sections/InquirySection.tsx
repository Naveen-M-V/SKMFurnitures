'use client'

import { useState } from 'react'
import { supabase, supabaseConfigured, Inquiry } from '@/lib/supabaseClient'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    requirement: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number'
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please describe your requirement'
    } else if (formData.requirement.length < 10) {
      newErrors.requirement = 'Requirement must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitting(true)
    setError('')

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (supabaseConfigured) {
      try {
        const { error: supabaseError } = await supabase
          .from('inquiries')
          .insert([
            {
              name: formData.name,
              mobile: formData.mobile,
              requirement: formData.requirement,
            },
          ])

        if (supabaseError) throw supabaseError
      } catch (err: any) {
        setError(err.message || 'Failed to submit inquiry. Please try again.')
        setSubmitting(false)
        return
      }
    }

    setSuccess(true)
    setFormData({ name: '', mobile: '', requirement: '' })
    setSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-skm-brown to-skm-brown-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your furniture requirements and we'll get back to you within 24 hours
          </p>
          <div className="w-24 h-1 bg-skm-gold mx-auto mt-6" />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {success ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your inquiry has been submitted successfully. Our team will contact you soon.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="btn-primary"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 text-red-700 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-skm-gold'
                  } focus:outline-none`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Mobile Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                    errors.mobile
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-skm-gold'
                  } focus:outline-none`}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              {/* Requirement Field */}
              <div>
                <label
                  htmlFor="requirement"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Requirement *
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
                    errors.requirement
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-skm-gold'
                  } focus:outline-none`}
                  placeholder="Describe what furniture you're looking for, preferred style, budget, etc."
                />
                {errors.requirement && (
                  <p className="mt-1 text-sm text-red-600">{errors.requirement}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-secondary flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
