'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase, supabaseConfigured, Review } from '@/lib/supabaseClient'
import { Plus, Trash2, Check, X, Loader2, Star, Edit2 } from 'lucide-react'

export default function ReviewsManager() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingReview, setEditingReview] = useState<Review | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    review_text: '',
    rating: 5,
  })

  const fetchReviews = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setReviews(data || [])
    } catch (err) {
      console.error('Error fetching reviews:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (supabaseConfigured) {
      fetchReviews()
    } else {
      setLoading(false)
    }
  }, [fetchReviews])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingReview) {
        // Update existing review
        const { error } = await supabase
          .from('reviews')
          .update({
            name: formData.name,
            review_text: formData.review_text,
            rating: formData.rating,
          })
          .eq('id', editingReview.id)

        if (error) throw error
      } else {
        // Create new review
        const { error } = await supabase
          .from('reviews')
          .insert([
            {
              name: formData.name,
              review_text: formData.review_text,
              rating: formData.rating,
              status: 'approved',
            },
          ])

        if (error) throw error
      }

      setFormData({ name: '', review_text: '', rating: 5 })
      setShowForm(false)
      setEditingReview(null)
      fetchReviews()
    } catch (err: any) {
      alert('Error saving review: ' + err.message)
    }
  }

  const handleEdit = (review: Review) => {
    setEditingReview(review)
    setFormData({
      name: review.name,
      review_text: review.review_text,
      rating: review.rating,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchReviews()
    } catch (err: any) {
      alert('Error deleting review: ' + err.message)
    }
  }

  const toggleStatus = async (review: Review) => {
    const newStatus = review.status === 'approved' ? 'pending' : 'approved'
    
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ status: newStatus })
        .eq('id', review.id)

      if (error) throw error
      fetchReviews()
    } catch (err: any) {
      alert('Error updating status: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-skm-red" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Add Review Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-skm-red-dark">Manage Reviews</h2>
        <button
          onClick={() => {
            setEditingReview(null)
            setFormData({ name: '', review_text: '', rating: 5 })
            setShowForm(!showForm)
          }}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingReview ? 'Edit Review' : 'Add New Review'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Customer Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-skm-red focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`p-1 ${
                      star <= formData.rating
                        ? 'text-skm-red'
                        : 'text-gray-300'
                    }`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Review Text
              </label>
              <textarea
                value={formData.review_text}
                onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-skm-red focus:outline-none resize-none"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="btn-primary">
                {editingReview ? 'Update Review' : 'Add Review'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rating</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Review</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reviews.map((review) => (
              <tr key={review.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-skm-red fill-skm-red'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600 line-clamp-2 max-w-md">
                    {review.review_text}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      review.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {review.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => toggleStatus(review)}
                      className={`p-2 rounded-lg transition-colors ${
                        review.status === 'approved'
                          ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                      title={review.status === 'approved' ? 'Unapprove' : 'Approve'}
                    >
                      {review.status === 'approved' ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Check className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleEdit(review)}
                      className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {reviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
