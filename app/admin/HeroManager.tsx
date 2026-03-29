'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { supabase, supabaseConfigured } from '@/lib/supabaseClient'
import { Upload, Trash2, Check, X, Loader2, ImageIcon } from 'lucide-react'

interface HeroImage {
  id: string
  image_url: string
  status: 'approved' | 'pending' | 'rejected'
  created_at: string
}

export default function HeroManager() {
  const [images, setImages] = useState<HeroImage[]>([])
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchImages = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('hero_images')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setImages(data || [])
    } catch (err) {
      console.error('Error fetching images:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (supabaseConfigured) {
      fetchImages()
    } else {
      setLoading(false)
    }
  }, [fetchImages])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `hero-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('hero-images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('hero-images')
        .getPublicUrl(filePath)

      // Insert into database
      const { error: dbError } = await supabase
        .from('hero_images')
        .insert([
          {
            image_url: publicUrl,
            status: 'pending',
          },
        ])

      if (dbError) throw dbError

      fetchImages()
    } catch (err: any) {
      alert('Error uploading image: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  const updateStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('hero_images')
        .update({ status })
        .eq('id', id)

      if (error) throw error
      fetchImages()
    } catch (err: any) {
      alert('Error updating status: ' + err.message)
    }
  }

  const deleteImage = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      // Delete from database
      const { error: dbError } = await supabase
        .from('hero_images')
        .delete()
        .eq('id', id)

      if (dbError) throw dbError

      // Extract file path from URL and delete from storage
      const filePath = imageUrl.split('hero-images/')[1]
      if (filePath) {
        await supabase.storage
          .from('hero-images')
          .remove([`hero-images/${filePath}`])
      }

      fetchImages()
    } catch (err: any) {
      alert('Error deleting image: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-skm-brown" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-skm-brown-dark mb-4 flex items-center">
          <ImageIcon className="w-6 h-6 mr-2" />
          Upload Hero Images
        </h2>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-skm-gold transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
            id="hero-upload"
          />
          <label
            htmlFor="hero-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            {uploading ? (
              <Loader2 className="w-12 h-12 text-skm-brown animate-spin mb-4" />
            ) : (
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
            )}
            <span className="text-lg font-semibold text-gray-700">
              {uploading ? 'Uploading...' : 'Click to upload image'}
            </span>
            <span className="text-sm text-gray-500 mt-2">
              Recommended size: 1920x1080px, JPG or PNG
            </span>
          </label>
        </div>
      </div>

      {/* Images Grid */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-skm-brown-dark mb-4">Manage Images</h2>
        
        {images.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="border rounded-xl overflow-hidden bg-gray-50"
              >
                <div className="relative h-48">
                  <Image
                    src={image.image_url}
                    alt="Hero image"
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      image.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : image.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {image.status.charAt(0).toUpperCase() + image.status.slice(1)}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {image.status !== 'approved' && (
                        <button
                          onClick={() => updateStatus(image.id, 'approved')}
                          className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      {image.status !== 'rejected' && (
                        <button
                          onClick={() => updateStatus(image.id, 'rejected')}
                          className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <button
                      onClick={() => deleteImage(image.id, image.image_url)}
                      className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Uploaded: {new Date(image.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
