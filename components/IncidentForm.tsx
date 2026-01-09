'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const incidentSchema = z.object({
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please enter a time'),
  location: z.string().min(2, 'Please enter the location'),
  description: z.string().min(10, 'Please provide a detailed description'),
  type: z.enum(['safety', 'maintenance', 'noise', 'other'], {
    required_error: 'Please select an incident type',
  }),
  reporterName: z.string().min(2, 'Please enter your name'),
  reporterContact: z.string().min(10, 'Please enter your contact number'),
})

type IncidentFormData = z.infer<typeof incidentSchema>

export default function IncidentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IncidentFormData>({
    resolver: zodResolver(incidentSchema),
  })

  const onSubmit = async (data: IncidentFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/incidents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">
          Incident Reported
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for reporting this incident. Our team will review it and
          take appropriate action. If this is an emergency, please contact
          security immediately.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Report Another Incident
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-navy mb-2">
          Report an Incident
        </h2>
        <p className="text-gray-600">
          Use this form to report any incidents, concerns, or issues at
          Concordia House. All reports are taken seriously and handled
          confidentially.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Incident *
            </label>
            <input
              type="date"
              {...register('date')}
              className="input-field"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time of Incident *
            </label>
            <input
              type="time"
              {...register('time')}
              className="input-field"
            />
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            {...register('location')}
            className="input-field"
            placeholder="e.g., Room 101, Common Area, Parking Lot"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">
              {errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Incident Type *
          </label>
          <select {...register('type')} className="input-field">
            <option value="">Select type</option>
            <option value="safety">Safety Concern</option>
            <option value="maintenance">Maintenance Issue</option>
            <option value="noise">Noise Complaint</option>
            <option value="other">Other</option>
          </select>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            {...register('description')}
            rows={5}
            className="input-field"
            placeholder="Please provide a detailed description of the incident..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-navy mb-4">
            Your Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                {...register('reporterName')}
                className="input-field"
                placeholder="Enter your name"
              />
              {errors.reporterName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.reporterName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                {...register('reporterContact')}
                className="input-field"
                placeholder="082 123 4567"
              />
              {errors.reporterContact && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.reporterContact.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-600">
              There was an error submitting your report. Please try again or
              contact us directly if this is urgent.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting Report...' : 'Submit Report'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          <strong>Emergency?</strong> Please contact security immediately at
          the front desk or call the emergency number provided in your welcome
          pack.
        </p>
      </form>
    </motion.div>
  )
}

