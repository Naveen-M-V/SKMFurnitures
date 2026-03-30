'use client'

import { useState } from 'react'
import { supabase, supabaseConfigured, Inquiry } from '@/lib/supabaseClient'
import { Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react'

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-skm-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-skm-scarlet/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-skm-royal/5 rounded-full blur-3xl" />

      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-skm-scarlet" />
              <span className="text-xs uppercase tracking-[0.3em] text-skm-scarlet font-medium">
                Get in Touch
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-skm-text leading-[0.9] mb-8">
              Start Your
              <span className="block text-skm-scarlet italic font-light">Journey</span>
            </h2>
            <p className="text-lg text-skm-text-muted/70 leading-relaxed font-light mb-12">
              Ready to transform your space? Share your vision with us and our 
              design consultants will craft a bespoke solution tailored to your lifestyle.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-skm-border flex items-center justify-center">
                  <span className="text-skm-scarlet text-xs uppercase tracking-widest">PH</span>
                </div>
                <div>
                  <span className="block text-xs text-skm-text-muted/50 uppercase tracking-widest">Phone</span>
                  <a href="tel:+919442569766" className="text-skm-text hover:text-skm-scarlet transition-colors">
                    +91 94425 69766
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-skm-border flex items-center justify-center">
                  <span className="text-skm-scarlet text-xs uppercase tracking-widest">EM</span>
                </div>
                <div>
                  <span className="block text-xs text-skm-text-muted/50 uppercase tracking-widest">Email</span>
                  <a href="mailto:hello@skmfurniture.com" className="text-skm-text hover:text-skm-scarlet transition-colors">
                    hello@skmfurniture.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="glass-card p-8 md:p-12">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 border border-skm-scarlet/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-skm-scarlet" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-skm-text mb-4">
                    Inquiry Received
                  </h3>
                  <p className="text-skm-text-muted/70 mb-8">
                    Our design team will contact you within 24 hours to discuss your vision.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-8 py-4 bg-skm-scarlet text-white text-sm font-semibold uppercase tracking-widest hover:bg-skm-scarlet-light transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-skm-scarlet/10 border border-skm-scarlet/30">
                      <AlertCircle className="w-5 h-5 text-skm-scarlet flex-shrink-0" />
                      <p className="text-sm text-skm-text-muted">{error}</p>
                    </div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-widest text-skm-text-muted/50 mb-3"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 py-3 text-skm-text placeholder-skm-text-muted/30 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-skm-scarlet'
                          : 'border-skm-border focus:border-skm-scarlet'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-skm-scarlet">{errors.name}</p>
                    )}
                  </div>

                  {/* Mobile Field */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-xs uppercase tracking-widest text-skm-text-muted/50 mb-3"
                    >
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      maxLength={10}
                      className={`w-full bg-transparent border-b-2 py-3 text-skm-text placeholder-skm-text-muted/30 focus:outline-none transition-colors ${
                        errors.mobile
                          ? 'border-skm-scarlet'
                          : 'border-skm-border focus:border-skm-scarlet'
                      }`}
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.mobile && (
                      <p className="mt-2 text-xs text-skm-scarlet">{errors.mobile}</p>
                    )}
                  </div>

                  {/* Requirement Field */}
                  <div>
                    <label
                      htmlFor="requirement"
                      className="block text-xs uppercase tracking-widest text-skm-text-muted/50 mb-3"
                    >
                      Your Vision *
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-transparent border-b-2 py-3 text-skm-text placeholder-skm-text-muted/30 focus:outline-none transition-colors resize-none ${
                        errors.requirement
                          ? 'border-skm-scarlet'
                          : 'border-skm-border focus:border-skm-scarlet'
                      }`}
                      placeholder="Describe your dream furniture..."
                    />
                    {errors.requirement && (
                      <p className="mt-2 text-xs text-skm-scarlet">{errors.requirement}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-skm-scarlet text-white text-sm font-semibold uppercase tracking-widest hover:bg-skm-scarlet-light transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
