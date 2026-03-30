'use client'

import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'

const showrooms = [
  {
    name: 'Flagship',
    location: 'Trivandram Road',
    address: '14/2, Trivandram Road, Murugankurichi, Tirunelveli - 627002',
    phone: '+91 94425 69766',
    hours: '10:00 AM - 9:00 PM',
    mapUrl: 'https://www.google.com/maps?q=14/2+Trivandram+Road+Murugankurichi+Tirunelveli+627002',
  },
  {
    name: 'NGO Colony',
    location: 'Nagercoil Road',
    address: '1004, Thuthiyin Kottai, NGO Colony, Nagercoil Road, Tirunelveli - 627005',
    phone: '+91 94878 22828',
    hours: '10:00 AM - 9:00 PM',
    mapUrl: 'https://www.google.com/maps?q=1004+Thuthiyin+Kottai+NGO+Colony+Nagercoil+Road+Tirunelveli+627005',
  },
  {
    name: 'Ambasamudram',
    location: 'Thilagarpuram',
    address: '118-A, Thilagarpuram Main Road, Ambasamudram, Tirunelveli - 627401',
    phone: '+91 94878 32828',
    hours: '10:00 AM - 9:00 PM',
    mapUrl: 'https://www.google.com/maps?q=118-A+Thilagarpuram+Main+Road+Ambasamudram+Tirunelveli+627401',
  },
  {
    name: 'Valliyoor',
    location: 'Nagercoil Main Road',
    address: 'Nagercoil Main Road, Near Chithra Theatre, Valliyoor',
    phone: '+91 94426 72828',
    hours: '10:00 AM - 9:00 PM',
    mapUrl: 'https://www.google.com/maps?q=Nagercoil+Main+Road+Chithra+Theatre+Valliyoor',
  },
]

export default function VisitUsSection() {
  return (
    <section id="showrooms" className="section-padding bg-skm-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-skm-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-skm-scarlet/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-skm-scarlet" />
              <span className="text-xs uppercase tracking-[0.3em] text-skm-scarlet font-medium">
                Locations
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-skm-text leading-[0.9]">
              Visit Our
              <span className="block text-skm-scarlet italic font-light">Galleries</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-lg text-skm-text-muted/70 leading-relaxed font-light">
              Experience our collections in person. Four distinctive locations, 
              each offering a curated journey through luxury furniture.
            </p>
          </div>
        </div>

        {/* Showrooms Grid - Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showrooms.map((showroom, index) => (
            <div
              key={showroom.name}
              className="group glass-card-hover p-8 relative overflow-hidden"
            >
              {/* Location Number */}
              <span className="absolute top-8 right-8 text-7xl font-serif font-bold text-skm-text/[0.03] group-hover:text-skm-scarlet/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-bold text-skm-text group-hover:text-skm-scarlet transition-colors">
                    {showroom.name}
                  </h3>
                  <span className="text-sm text-skm-text-muted/50 uppercase tracking-widest">
                    {showroom.location}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-skm-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-skm-scarlet" />
                    </div>
                    <p className="text-sm text-skm-text-muted/70 leading-relaxed pt-2">
                      {showroom.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-skm-border flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-skm-scarlet" />
                    </div>
                    <a 
                      href={`tel:${showroom.phone.replace(/\s/g, '')}`}
                      className="text-sm text-skm-text-muted/70 hover:text-skm-text transition-colors"
                    >
                      {showroom.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-skm-border flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-skm-scarlet" />
                    </div>
                    <p className="text-sm text-skm-text-muted/70">
                      {showroom.hours}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={showroom.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-skm-text text-sm uppercase tracking-widest group/link"
                >
                  <span className="group-hover/link:text-skm-scarlet transition-colors">Get Directions</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:text-skm-scarlet group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                </a>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-skm-scarlet group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Map Preview */}
        <div className="mt-16 glass-card overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15754.75757054026!2d77.7238396!3d8.7139121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04124f1b7f9d45%3A0x5e5c5e5e5e5e5e5e!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
