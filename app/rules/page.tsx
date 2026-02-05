'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const rulesSections = [
  {
    title: '1. Purpose',
    content: 'These House Rules regulate conduct within the residence to ensure a safe, respectful, hygienic, and academically conducive living environment. They apply to all residents and their visitors and must be read together with the NSFAS Standardised Lease Agreement.',
  },
  {
    title: '2. General Conduct',
    rules: [
      'Residents must conduct themselves in a respectful, responsible, and considerate manner at all times.',
      'Harassment, intimidation, discrimination, abusive language, or threatening behaviour is strictly prohibited.',
      'All residents must comply with South African law, these House Rules and operational policies, and reasonable instructions issued by residence management or authorised staff.',
      'All staff (including security, cleaners, and management) must be treated with respect and courtesy at all times.',
    ],
  },
  {
    title: '3. Noise & Consideration for Others',
    rules: [
      'Quiet hours are 22:00 to 06:00 daily.',
      'Loud music, shouting, parties, or any disruptive behaviour is prohibited at all times.',
      'Running in corridors or causing disturbances in common areas is not permitted.',
      'Repeated or serious disturbances may result in disciplinary action in line with residence procedures.',
      'Disturbances should be reported to residence management or security.',
    ],
  },
  {
    title: '4. Visitors',
    rules: [
      'Concordia House is a female-only residence. For the safety and comfort of all students, only female visitors are permitted on the premises.',
      'Visitors are permitted only during approved visiting hours, which are 09:00 to 21:00, unless otherwise determined by management.',
      'Visiting hours may be amended, reduced, or suspended at the discretion of management where safety, security, behavioural, capacity, or operational considerations require it.',
      'A resident may have no more than two (2) visitors at any one time.',
      'All visitors must be signed in and signed out at security or reception and may be required to present valid identification.',
      'Visitors may not move around the residence unaccompanied and must remain with the hosting resident at all times.',
      'Visitors may not remain on the premises if the hosting resident leaves the residence.',
      'Overnight visitors are not permitted under any circumstances.',
      'Residents are fully responsible and financially liable for the conduct, behaviour, and any damage caused by their visitors.',
      'Management reserves the right to refuse entry to, restrict, or remove any visitor who does not comply with residence rules or whose presence may compromise safety or order.',
    ],
  },
  {
    title: '5. Safety & Security',
    rules: [
      'Residents may not tamper with or misuse firefighting equipment, fire alarms or detectors, CCTV systems, or access control systems.',
      'Emergency exits, corridors, stairways, and fire routes must remain clear at all times.',
      'Residents must keep their rooms locked when unattended and ensure windows are secured.',
      'Room keys or access devices may not be shared or lent to any person.',
      'Lost or damaged keys must be reported immediately.',
      'Residents are responsible for the safekeeping of their personal belongings.',
    ],
  },
  {
    title: '6. Fire Safety & Prohibited Items',
    intro: 'The following are strictly prohibited within the residence:',
    rules: [
      'Candles, incense, oil lamps, or any naked flame',
      'Illegal substances or illegal activities',
      'Weapons or dangerous objects',
      'Unauthorised heaters, bar heaters, kettles, or electrical appliances',
      'Tampering with prepaid meters or electrical infrastructure',
      'Cooking or food preparation of any sort in bedrooms',
    ],
    note: 'Fire safety violations are regarded as serious misconduct.',
  },
  {
    title: '7. Water & Electricity Usage',
    intro: 'Reasonable water, gas and electricity usage is included in the rental. Residents must:',
    rules: [
      'Switch off lights and appliances when not in use',
      'Use water sparingly',
      'Ensure stoves, ovens, and plates are turned off after use',
      'Report leaks or faults immediately',
    ],
    note: 'Excessive, negligent, or unlawful use (including tampering) may result in disciplinary action in accordance with the NSFAS lease.',
  },
  {
    title: '8. Cleanliness & Hygiene',
    rules: [
      'Cleaning staff are responsible for communal areas, including bathrooms, kitchens, study areas, and passages.',
      'Residents are responsible for keeping their own rooms clean, hygienic, and free of health hazards.',
      'Food must be stored in sealed containers to prevent pests.',
      'Waste and stale food must be disposed of in designated bins in the KITCHEN only.',
      'Residents are encouraged to take pride in their rooms and care for the residence environment.',
    ],
  },
  {
    title: '9. Furniture, Fixtures & Appliances',
    rules: [
      'Furniture and appliances provided may not be removed from rooms or common areas without permission.',
      'Communal furniture and appliances may not be used in bedrooms.',
      'Any damage caused intentionally or through negligence will be charged to the responsible resident.',
      'Residents will be liable for the reasonable cost of repairs or replacement where applicable.',
    ],
  },
  {
    title: '10. Room Inspections',
    rules: [
      'Room inspections will be conducted monthly, normally with the resident present.',
      'Reasonable notice will be given.',
      'Inspections may occur without the resident present where access is required for health, safety, or maintenance reasons.',
      'Where a room poses a health or safety risk, residents may be instructed to clean or rectify the issue.',
      'If a resident fails to do so, cleaning may be arranged and reasonable costs may be recovered.',
    ],
  },
  {
    title: '11. Smoking, Drugs & Alcohol',
    rules: [
      'The residence is a smoke-free environment.',
      'Smoking, drugs, and illegal substances are strictly prohibited in rooms and common areas.',
      'The storage, use, or sale of illegal drugs is prohibited.',
      'Alcohol consumption and storage are not permitted within the residence.',
      'Breaches may result in disciplinary action and escalation in line with NSFAS and institutional processes.',
    ],
  },
  {
    title: '12. Compliance & Discipline',
    rules: [
      'Failure to comply with these House Rules constitutes misconduct.',
      'Disciplinary measures may include warnings, corrective actions or escalation to NSFAS and the relevant institution.',
      'Serious or repeated misconduct may result in removal from the residence in accordance with the NSFAS lease and applicable procedures.',
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
            House Rules & Residence Code of Conduct
          </h1>
          <p className="text-xl text-gray-600">
            Guidelines to ensure a safe, respectful, hygienic, and academically conducive living environment
          </p>
        </motion.div>

        <div className="space-y-4">
          {rulesSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenSection(openSection === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg md:text-xl font-bold text-navy">
                  {section.title}
                </h2>
                <svg
                  className={`w-5 h-5 text-terracotta transition-transform duration-300 flex-shrink-0 ${openSection === index ? 'rotate-180' : ''
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
                    {section.content && (
                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    {section.intro && (
                      <p className="text-gray-700 font-medium mb-3">
                        {section.intro}
                      </p>
                    )}
                    {section.rules && (
                      <ul className="space-y-3">
                        {section.rules.map((rule, ruleIndex) => (
                          <li
                            key={ruleIndex}
                            className="flex items-start text-gray-700"
                          >
                            <span className="text-terracotta mr-3 mt-1 flex-shrink-0">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="mt-4 text-sm font-semibold text-navy italic">
                        {section.note}
                      </p>
                    )}
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
          className="mt-12 bg-navy/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-navy mb-4 text-center">
            Acknowledgement & Acceptance
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            All residents must confirm that they have read, understood, and agree to comply with the House Rules and Residence Code of Conduct. Failure to comply may result in disciplinary action in accordance with residence procedures, the NSFAS Standardised Lease Agreement, and applicable laws.
          </p>
          <div className="text-center">
            <a
              href="https://wa.me/27839940008"
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
              <span>Questions? Contact Us on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
