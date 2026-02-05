'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'

const ACCESS_CODE = 'CONC2026'

const codeSchema = z.object({
    code: z.string().min(1, 'Please enter the access code'),
})

const suggestionSchema = z.object({
    name: z.string().optional().or(z.literal('')),
    email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
    category: z.enum(['facilities', 'activities', 'food', 'rules', 'other'], {
        required_error: 'Please select a category',
    }),
    suggestion: z.string().min(10, 'Please provide a detailed suggestion (at least 10 characters)'),
})

type CodeFormData = z.infer<typeof codeSchema>
type SuggestionFormData = z.infer<typeof suggestionSchema>

export default function SuggestionForm() {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [codeError, setCodeError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register: registerCode,
        handleSubmit: handleCodeSubmit,
        formState: { errors: codeErrors },
    } = useForm<CodeFormData>({
        resolver: zodResolver(codeSchema),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SuggestionFormData>({
        resolver: zodResolver(suggestionSchema),
    })

    const onCodeSubmit = (data: CodeFormData) => {
        if (data.code === ACCESS_CODE) {
            setIsUnlocked(true)
            setCodeError('')
        } else {
            setCodeError('Invalid access code. Please check and try again.')
        }
    }

    const onSubmit = async (data: SuggestionFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/suggestions', {
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
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                        className="w-8 h-8 text-terracotta"
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
                    Suggestion Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                    Thank you for your suggestion! We value your input and will carefully
                    consider all suggestions to improve Concordia House for everyone.
                </p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="btn-primary"
                >
                    Submit Another Suggestion
                </button>
            </motion.div>
        )
    }

    return (
        <AnimatePresence mode="wait">
            {!isUnlocked ? (
                <motion.div
                    key="code-entry"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
                >
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-navy"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-navy mb-2">
                            Suggestion Box
                        </h2>
                        <p className="text-gray-600">
                            Enter the access code to submit your suggestion
                        </p>
                    </div>

                    <form onSubmit={handleCodeSubmit(onCodeSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Access Code *
                            </label>
                            <input
                                type="text"
                                {...registerCode('code')}
                                className="input-field text-center text-lg tracking-widest uppercase"
                                placeholder="Enter code"
                                autoComplete="off"
                            />
                            {codeErrors.code && (
                                <p className="mt-1 text-sm text-red-600">{codeErrors.code.message}</p>
                            )}
                            {codeError && (
                                <p className="mt-1 text-sm text-red-600">{codeError}</p>
                            )}
                        </div>

                        <button type="submit" className="w-full btn-primary">
                            Access Suggestion Box
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            This code is provided to Concordia House students only.
                        </p>
                    </form>
                </motion.div>
            ) : (
                <motion.div
                    key="suggestion-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
                >
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-navy mb-2">
                            Share Your Suggestion
                        </h2>
                        <p className="text-gray-600">
                            Help us make Concordia House even better! Share your ideas for
                            improvements, new activities, or any other suggestions.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name (Optional)
                                </label>
                                <input
                                    type="text"
                                    {...register('name')}
                                    className="input-field"
                                    placeholder="Enter your name or leave blank for anonymous"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email (Optional)
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
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category *
                            </label>
                            <select {...register('category')} className="input-field">
                                <option value="">Select a category</option>
                                <option value="facilities">Facilities & Maintenance</option>
                                <option value="activities">Activities & Events</option>
                                <option value="food">Food & Catering</option>
                                <option value="rules">Rules & Policies</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.category && (
                                <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Suggestion *
                            </label>
                            <textarea
                                {...register('suggestion')}
                                rows={6}
                                className="input-field"
                                placeholder="Share your idea or suggestion in detail..."
                            />
                            {errors.suggestion && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.suggestion.message}
                                </p>
                            )}
                        </div>

                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-sm text-red-600">
                                    There was an error submitting your suggestion. Please try again.
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                            All suggestions are reviewed by the Concordia House management team.
                            Thank you for helping us improve!
                        </p>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
