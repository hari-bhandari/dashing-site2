"use client";

import { InlineWidget } from "react-calendly";
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalendlyPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CalendlyPopup({ isOpen, onClose }: CalendlyPopupProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-[70]" onClick={onClose} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 flex items-center justify-center z-[71] p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full p-6 relative">
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="h-5 w-5" />
                            </button>
                            <InlineWidget 
                                url="https://calendly.com/frank-mut4/dashing-demo"
                                styles={{
                                    height: '850px'
                                }}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
