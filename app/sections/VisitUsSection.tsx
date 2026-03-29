'use client'

import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

const showrooms = [
  {
    name: 'SKM FURNITURE WORLD',
    address: '14/2, Trivandram Road, Murugankurichi, Tirunelveli - 627002',
    phone: '+91 94425 69766',
    hours: '10:00 AM - 9:00 PM (Mon-Sun)',
    mapUrl: 'https://www.google.com/maps?q=14/2+Trivandram+Road+Murugankurichi+Tirunelveli+627002&output=embed',
  },
  {
    name: 'SKM FURNITURE WORLD',
    address: '1004, Thuthiyin Kottai (South side), NGO Colony, Nagercoil Road, Tirunelveli - 627005',
    phone: '+91 94878 22828',
    hours: '10:00 AM - 9:00 PM (Mon-Sun)',
    mapUrl: 'https://www.google.com/maps?q=1004+Thuthiyin+Kottai+NGO+Colony+Nagercoil+Road+Tirunelveli+627005&output=embed',
  },
  {
    name: 'SKM FURNITURE WORLD',
    address: '118-A, Thilagarpuram Main Road, Ambasamudram, Tirunelveli - 627 401',
    phone: '+91 94878 32828',
    hours: '10:00 AM - 9:00 PM (Mon-Sun)',
    mapUrl: 'https://www.google.com/maps?q=118-A+Thilagarpuram+Main+Road+Ambasamudram+Tirunelveli+627401&output=embed',
  },
  {
    name: 'SKM FURNITURE WORLD - Valliyoor',
    address: 'Nagercoil Main Road, Near Chithra Theatre, Valliyoor',
    phone: '+91 94426 72828',
    hours: '10:00 AM - 9:00 PM (Mon-Sun)',
    mapUrl: 'https://www.google.com/maps?q=Nagercoil+Main+Road+Chithra+Theatre+Valliyoor&output=embed',
  },
]

export default function VisitUsSection() {
  return (
    <section id="showrooms" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-skm-red-dark mb-4">
            Visit Our Showrooms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our furniture collection in person at any of our conveniently located showrooms
          </p>
          <div className="w-24 h-1 bg-skm-red mx-auto mt-6" />
        </div>

        {/* Showrooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showrooms.map((showroom, index) => (
            <div
              key={showroom.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Map */}
              <div className="h-48 w-full bg-gray-200 relative">
                <iframe
                  src={showroom.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-skm-red-dark mb-4">
                  {showroom.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-skm-red mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{showroom.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-skm-red flex-shrink-0" />
                    <a
                      href={`tel:${showroom.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 text-sm hover:text-skm-red transition-colors"
                    >
                      {showroom.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-skm-red flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{showroom.hours}</p>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(showroom.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center space-x-2 text-skm-red font-semibold hover:text-skm-red-light transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
