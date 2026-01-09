'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const applicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  roomType: z.enum(['single', 'double'], {
    required_error: 'Please select a room type',
  }),
  course: z.string().min(2, 'Please enter your course'),
  yearOfStudy: z.string().min(1, 'Please select your year of study'),
  nsfasFunded: z.enum(['yes', 'no'], {
    required_error: 'Please indicate if you are NSFAS funded',
  }),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  })

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        console.error('Application error:', result)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
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
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
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
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your application! We've received your submission and will review it promptly.
          Due to high demand at this exclusive residence, applications are processed on a first-come basis,
          and a waitlist is maintained. We'll contact you as soon as a space becomes available.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Submit Another Application
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
      <h2 className="text-3xl font-bold text-navy mb-2">
        Join our Waitlist
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below to join the waitlist for a room at Concordia House. All applications will be reviewed,
        and due to high demand, a waitlist will be maintained. All fields are required.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register('name')}
            className="input-field"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register('email')}
              className="input-field"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="input-field"
              placeholder="082 123 4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Room Type *
          </label>
          <select {...register('roomType')} className="input-field">
            <option value="">Select room type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
          </select>
          {errors.roomType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.roomType.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course of Study *
            </label>
            <input
              type="text"
              {...register('course')}
              className="input-field"
              placeholder="e.g., BCom, Engineering"
            />
            {errors.course && (
              <p className="mt-1 text-sm text-red-600">{errors.course.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year of Study *
            </label>
            <select {...register('yearOfStudy')} className="input-field">
              <option value="">Select year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="postgrad">Postgraduate</option>
            </select>
            {errors.yearOfStudy && (
              <p className="mt-1 text-sm text-red-600">
                {errors.yearOfStudy.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you NSFAS funded? *
          </label>
          <select {...register('nsfasFunded')} className="input-field">
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.nsfasFunded && (
            <p className="mt-1 text-sm text-red-600">
              {errors.nsfasFunded.message}
            </p>
          )}
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-600">
              There was an error submitting your application. Please try again
              or contact us directly.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our terms and conditions. Due
          to high demand, applications are subject to availability and a
          waitlist may apply.
        </p>
      </form>
    </motion.div>
  )
}

