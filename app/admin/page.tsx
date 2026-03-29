'use client'

import { useState } from 'react'
import HeroManager from './HeroManager'
import ReviewsManager from './ReviewsManager'
import InquiriesManager from './InquiriesManager'
import { LogOut, Image, MessageSquare, Inbox } from 'lucide-react'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'hero' | 'reviews' | 'inquiries'>('hero')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'
    
    if (password === adminPassword) {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setPassword('')
    setActiveTab('hero')
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-skm-red to-skm-red-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-skm-red-dark mb-2">Admin Login</h1>
            <p className="text-gray-600">SKM Furniture World CMS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-skm-red focus:outline-none"
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full btn-secondary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-skm-red-dark text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">SKM Furniture - Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('hero')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                activeTab === 'hero'
                  ? 'border-skm-red text-skm-red'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Image className="w-5 h-5" />
              <span>Hero Images</span>
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                activeTab === 'reviews'
                  ? 'border-skm-red text-skm-red'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Reviews</span>
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                activeTab === 'inquiries'
                  ? 'border-skm-red text-skm-red'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Inbox className="w-5 h-5" />
              <span>Inquiries</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'hero' && <HeroManager />}
        {activeTab === 'reviews' && <ReviewsManager />}
        {activeTab === 'inquiries' && <InquiriesManager />}
      </main>
    </div>
  )
}
