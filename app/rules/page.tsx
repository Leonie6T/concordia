'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const rulesSections = [
  {
    title: 'General Rules',
    rules: [
      'All residents must respect the rights and privacy of others',
      'Quiet hours are from 22:00 to 07:00 on weekdays',
      'Visitors must be signed in at the front desk',
      'No visitors after 22:00 without prior approval',
      'Common areas must be kept clean and tidy',
      'Smoking is strictly prohibited inside the building',
      'Alcohol consumption is only permitted in designated areas',
      'Illegal substances are strictly prohibited',
    ],
  },
  {
    title: 'Room Regulations',
    rules: [
      'Rooms must be kept clean and in good condition',
      'No modifications to rooms without written permission',
      'Furniture must not be removed from rooms',
      'Residents are responsible for any damage to their room',
      'Room inspections may be conducted with 24-hour notice',
      'Subletting or unauthorized occupants are not allowed',
    ],
  },
  {
    title: 'Academic Conduct',
    rules: [
      'Residents must maintain good academic standing',
      'Study areas must be respected during exam periods',
      'Noise levels must be kept to a minimum during study hours',
      'Residents are expected to attend classes regularly',
      'Academic support services are available upon request',
    ],
  },
  {
    title: 'Safety & Security',
    rules: [
      'All residents must carry their access cards at all times',
      'Do not share access codes or keys with others',
      'Report any security concerns immediately',
      'Emergency exits must remain clear at all times',
      'Fire safety equipment must not be tampered with',
      'Lock your room when leaving',
      'Suspicious activity must be reported to management',
    ],
  },
  {
    title: 'Payment & Fees',
    rules: [
      'Rent must be paid by the 1st of each month',
      'Late payment fees apply after the 5th',
      'NSFAS payments will be processed according to funding schedule',
      'Deposit is required upon acceptance',
      'Refund policy applies as per contract terms',
      'Additional fees may apply for damages or violations',
    ],
  },
  {
    title: 'Disciplinary Actions',
    rules: [
      'Violations of rules may result in warnings',
      'Repeated violations may lead to eviction',
      'Serious violations may result in immediate termination',
      'Appeals process is available for disciplinary actions',
      'All residents are subject to the code of conduct',
    ],
  },
]

export default function RulesPage() {
  const [openSection, setOpenSection] = useState<number | null>(0)

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Rules & Regulations
          </h1>
          <p className="text-xl text-gray-600">
            Guidelines to ensure a safe, respectful, and productive living
            environment for all residents
          </p>
        </motion.div>

        <div className="space-y-4">
          {rulesSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenSection(openSection === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-bold text-navy">
                  {section.title}
                </h2>
                <svg
                  className={`w-5 h-5 text-terracotta transition-transform duration-300 ${
                    openSection === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openSection === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-gray-100">
                    <ul className="space-y-3">
                      {section.rules.map((rule, ruleIndex) => (
                        <li
                          key={ruleIndex}
                          className="flex items-start text-gray-700"
                        >
                          <span className="text-terracotta mr-3 mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-navy/10 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-navy mb-4">
            Questions About the Rules?
          </h3>
          <p className="text-gray-700 mb-6">
            If you have any questions or need clarification about any of these
            rules, please don't hesitate to contact management.
          </p>
          <a
            href="https://wa.me/27123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Contact Us on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

