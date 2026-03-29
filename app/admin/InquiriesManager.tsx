'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase, supabaseConfigured, Inquiry } from '@/lib/supabaseClient'
import { Loader2, Mail, Phone, Calendar, Trash2, RefreshCw, Check } from 'lucide-react'

export default function InquiriesManager() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'new' | 'replied'>('all')

  const fetchInquiries = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setInquiries(data || [])
    } catch (err) {
      console.error('Error fetching inquiries:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (supabaseConfigured) {
      fetchInquiries()
      
      // Set up real-time subscription
      const subscription = supabase
        .channel('inquiries')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'inquiries' }, () => {
          fetchInquiries()
        })
        .subscribe()

      return () => {
        subscription.unsubscribe()
      }
    } else {
      setLoading(false)
    }
  }, [fetchInquiries])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return

    try {
      const { error } = await supabase
        .from('inquiries')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchInquiries()
    } catch (err: any) {
      alert('Error deleting inquiry: ' + err.message)
    }
  }

  const markAsReplied = async (id: string) => {
    try {
      const { error } = await supabase
        .from('inquiries')
        .update({ replied: true })
        .eq('id', id)

      if (error) throw error
      fetchInquiries()
    } catch (err: any) {
      alert('Error updating inquiry: ' + err.message)
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-skm-red-dark">Customer Inquiries</h2>
          <p className="text-gray-600 text-sm mt-1">
            Total: {inquiries.length} inquiries
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-skm-red focus:outline-none"
          >
            <option value="all">All Inquiries</option>
            <option value="new">New</option>
            <option value="replied">Replied</option>
          </select>
          <button
            onClick={fetchInquiries}
            className="p-2 bg-skm-red text-white rounded-lg hover:bg-skm-red-dark transition-colors"
            title="Refresh"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {inquiries.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No inquiries yet.</p>
          </div>
        ) : (
          inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                {/* Inquiry Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-lg font-bold text-skm-red-dark">
                      {inquiry.name}
                    </h3>
                    <span className="px-3 py-1 bg-skm-red/20 text-skm-red text-xs font-semibold rounded-full">
                      New
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <a
                        href={`tel:${inquiry.mobile}`}
                        className="hover:text-skm-red transition-colors"
                      >
                        {inquiry.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {inquiry.requirement}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col items-center md:items-end gap-2">
                  <a
                    href={`tel:${inquiry.mobile}`}
                    className="btn-secondary text-sm flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
