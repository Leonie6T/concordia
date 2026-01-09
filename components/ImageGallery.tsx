'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const facilityImages = [
  {
    src: '/assets/images/entrance.jpeg',
    alt: 'Entrance to Concordia House',
    title: 'Modern Entrance',
  },
  {
    src: '/assets/images/Room1.jpeg',
    alt: 'Student room at Concordia House',
    title: 'Comfortable Rooms',
  },
  {
    src: '/assets/images/Room2.jpeg',
    alt: 'Another student room view',
    title: 'Spacious Accommodation',
  },
  {
    src: '/assets/images/Kitchen.jpeg',
    alt: 'Kitchen facilities',
    title: 'Modern Kitchen',
  },
  {
    src: '/assets/images/Kitchen Counter.jpeg',
    alt: 'Kitchen counter area',
    title: 'Fully Equipped Kitchen',
  },
  {
    src: '/assets/images/Bathroom.jpeg',
    alt: 'Bathroom facilities',
    title: 'Clean Bathrooms',
  },
  {
    src: '/assets/images/Bathroom2.jpeg',
    alt: 'Another bathroom view',
    title: 'Modern Facilities',
  },
  {
    src: '/assets/images/Shower.jpeg',
    alt: 'Shower facilities',
    title: 'Private Showers',
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
            Take a Look{' '}
            <span className="text-terracotta">Inside</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Modern, comfortable, and well-maintained facilities designed for
            student success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facilityImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-base drop-shadow-lg">
                    {image.title}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-terracotta/50 rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={facilityImages[selectedImage].src}
                  alt={facilityImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {facilityImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {facilityImages[selectedImage].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

