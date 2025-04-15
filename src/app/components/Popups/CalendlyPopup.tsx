"use client";

import { InlineWidget } from "react-calendly";
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CalendlyPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CalendlyPopup({ isOpen, onClose }: CalendlyPopupProps) {
    const [isMobile, setIsMobile] = useState(false);
    

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);
    
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-[70]" onClick={onClose} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`fixed inset-0 flex items-center justify-center z-[71] ${isMobile ? 'p-2' : 'p-4'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div 
                            className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full
                                ${isMobile ? 'p-3 h-[95vh]' : 'p-6'} relative overflow-hidden`}
                        >
                    
                            <button
                                onClick={onClose}
                                className={`absolute ${isMobile ? 'right-3 top-3' : 'right-6 top-6'} 
                                    text-gray-500 hover:text-gray-700 dark:text-gray-400 
                                    dark:hover:text-gray-200 z-10 bg-white dark:bg-gray-800 
                                    rounded-full ${isMobile ? 'p-0.5' : 'p-1'} shadow-md`}
                            >
                                <X className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                            </button>
                            
                     
                            <div className="pr-2 overflow-hidden h-full">
                                <InlineWidget 
                                    url="https://calendly.com/frank-mut4/dashing-demo"
                                    styles={{
                                        height: isMobile ? 'calc(95vh - 24px)' : '850px',
                                        overflow: 'auto'
                                    }}
                                    prefill={{
                                        email: "",
                                        firstName: "",
                                        lastName: "",
                                        name: ""
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
