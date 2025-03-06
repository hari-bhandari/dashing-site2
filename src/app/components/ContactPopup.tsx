"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HeadphonesIcon, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('loading');
      
      await axios.post('https://api.dashingdisty.com/api/utils/formsubmit', {
        name: formData.name,
        email: formData.email,
        subject: "",
        message: formData.message,
        isDemo: false,
        "form-name": "Contact"
      }, {
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'Referer': 'https://www.dashingdisty.com/'
        }
      });
      
      setStatus('success');
      
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full p-6 relative flex">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>

              
              <div className="w-1/2 pr-8 border-r border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  <HeadphonesIcon className="w-24 h-24 text-[#22263e] dark:text-white" />
                  <h2 className="text-2xl font-bold text-[#22263e] dark:text-white">Support Services</h2>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Need help? Our support team is here to assist you.
                  </p>
                  <div className="space-y-2 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Email:</strong> support@dashingdisty.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Phone:</strong> +44 1904 946777
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Address:</strong> Dashing Distribution Software, Independence House, Millfield Lane, Nether Poppleton, York, YO26 6PH
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="w-1/2 pl-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Send us a message</h2>
                
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-64 space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <p className="text-lg font-medium text-green-500">Message sent successfully!</p>
                  </div>
                ) : status === 'error' ? (
                  <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-red-700">{errorMessage}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#22263e] text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


