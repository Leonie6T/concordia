'use client'

import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Location from '@/components/Location'
import ImageGallery from '@/components/ImageGallery'
import NSFASModal from '@/components/NSFASModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <NSFASModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Hero />
      <Features />
      <ImageGallery />
      <Location />

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
            Ready to Join{' '}
            <span className="text-terracotta">Concordia House?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Limited spaces available. Join our Waitlist now to secure your spot at this exclusive residence.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-terracotta rounded-full hover:bg-terracotta/90 transition-colors"
            >
              <span className="relative z-10">Apply / Waitlist</span>
              <div className="absolute inset-0 bg-terracotta-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

