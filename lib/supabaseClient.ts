import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const isConfigured = supabaseUrl && supabaseKey && 
  !supabaseUrl.includes('your_') && 
  !supabaseKey.includes('your_')

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseKey)
  : null as any

export const supabaseConfigured = isConfigured

export type HeroImage = {
  id: string
  image_url: string
  status: 'approved' | 'pending' | 'rejected'
  created_at: string
}

export type Review = {
  id: string
  name: string
  review_text: string
  rating: number
  status: 'approved' | 'pending'
  created_at: string
}

export type Inquiry = {
  id: string
  name: string
  mobile: string
  requirement: string
  created_at: string
}
