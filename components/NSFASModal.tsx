'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface NSFASModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function NSFASModal({ isOpen, onClose }: NSFASModalProps) {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header with gradient */}
                            <div className="bg-gradient-to-r from-terracotta to-terracotta-dark p-6 text-white">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold">We're Live on NSFAS!</h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                                        aria-label="Close modal"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    We are now live on the <span className="font-bold text-navy">NSFAS portal</span>.
                                    Please apply directly through NSFAS to secure your accommodation at Concordia House.
                                </p>

                                <div className="bg-gray-50 border-l-4 border-terracotta p-4 rounded-r-lg mb-6">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold text-navy">Note:</span> All applications must now be submitted
                                        through the official NSFAS portal.
                                    </p>
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={onClose}
                                    className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
