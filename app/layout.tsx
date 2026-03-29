export const metadata = {
  title: 'SKM Furniture World - Premium Furniture Store',
  description: 'Transform your home with timeless comfort. Premium quality furniture for bedroom, living room, dining, and office.',
}

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-skm-cream min-h-screen">
        {children}
      </body>
    </html>
  )
}
