# SKM Furniture World

A production-ready single-page website for a furniture brand built with Next.js, Tailwind CSS, and Supabase.

## Features

- **Hero Section**: Dynamic background images from Supabase Storage with approval workflow
- **Categories**: Grid of furniture categories with icons and descriptions
- **Why Choose Us**: Feature highlights with statistics
- **Customer Reviews**: Testimonials carousel from Supabase database
- **Visit Us**: 3 showroom locations with embedded Google Maps
- **Inquiry Form**: Form validation with Supabase integration
- **Admin Panel**: CMS for managing hero images, reviews, and inquiries
- **Responsive Design**: Mobile-first approach

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Project Structure

```
/app
  /admin           # Admin panel pages
    page.tsx       # Main admin dashboard
    HeroManager.tsx
    ReviewsManager.tsx
    InquiriesManager.tsx
  /components      # Reusable components
    Navbar.tsx
    Footer.tsx
  /sections        # Page sections
    HeroSection.tsx
    CategorySection.tsx
    WhyChooseUsSection.tsx
    ReviewsSection.tsx
    VisitUsSection.tsx
    InquirySection.tsx
  layout.tsx       # Root layout
  page.tsx         # Home page
  globals.css      # Global styles
/lib
  supabaseClient.ts  # Supabase client setup
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### 1. Clone and Install

```bash
# Navigate to project directory
cd d:/Athryan/SKM

# Install dependencies
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Create the following tables:

#### hero_images table
```sql
create table hero_images (
  id uuid default gen_random_uuid() primary key,
  image_url text not null,
  status text default 'pending' check (status in ('approved', 'pending', 'rejected')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

#### reviews table
```sql
create table reviews (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  review_text text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  status text default 'pending' check (status in ('approved', 'pending')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

#### inquiries table
```sql
create table inquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  mobile text not null,
  requirement text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

4. Create a storage bucket:
   - Go to Storage in Supabase dashboard
   - Create a new bucket called `hero-images`
   - Set bucket policy to allow public read access

### 3. Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_admin_password
```

### 4. Run Development Server

```bash
npm run dev
```

Visit:
- Website: `http://localhost:3000`
- Admin Panel: `http://localhost:3000/admin`

### 5. Build for Production

```bash
npm run build
npm start
```

## Admin Panel Access

Default admin password is set via `NEXT_PUBLIC_ADMIN_PASSWORD` environment variable.

Features:
- **Hero Images**: Upload, approve/reject, delete images
- **Reviews**: Add, edit, delete, approve reviews
- **Inquiries**: View and manage customer inquiries

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `skm-brown`: Primary brand color
- `skm-gold`: Accent color
- `skm-beige`: Background tones

### Showroom Locations
Edit `app/sections/VisitUsSection.tsx` to update showroom details and Google Maps embed URLs.

### Categories
Edit `app/sections/CategorySection.tsx` to modify furniture categories.

## License

MIT License - Feel free to use for your projects.
