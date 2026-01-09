'use client'

import { motion } from 'framer-motion'
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon,
  MapPinIcon,
  WifiIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: HomeIcon,
    title: 'Modern Rooms',
    description: 'Recently renovated single and double rooms with modern amenities',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safe & Secure',
    description: 'A large, secure campus with electric fencing.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Study-Friendly',
    description: 'Quiet spaces designed to help you excel in your studies',
  },
  {
    icon: MapPinIcon,
    title: 'Prime Location',
    description: '1.5km from WSU, 400m from Nonesi Mall and 800m from YOLO Lounge',
  },
  {
    icon: WifiIcon,
    title: 'High-Speed Internet',
    description: 'Reliable WiFi throughout the residence',
  },
  {
    icon: LockClosedIcon,
    title: 'NSFAS Accredited (PENDING)',
    description: 'Approved for NSFAS funding applications',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
            Why Choose{' '}
            <span className="text-terracotta">Concordia House?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Experience the perfect balance of comfort, convenience, and community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:border-terracotta/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-navy/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-terracotta rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

