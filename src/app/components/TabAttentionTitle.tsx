'use client'

import { useEffect, useState, useRef } from 'react'
 
const messages = [
  "🚀 Streamline Your Distribution with Dashing!",
  "📦 Optimize Inventory Management Now!",
  "📊 Discover AI-Powered Workflow Solutions!",
  "📞 Book a Demo Today!"
]
 
const TabAttentionTitle = () => {
  // Start with an empty title in state so we don't access `document.title` on the server
  const [originalTitle, setOriginalTitle] = useState('')
  const intervalRef = useRef(null)
 
  useEffect(() => {
    // Only run in the browser
    if (typeof document !== 'undefined') {
      // Capture the current document title once the component is mounted
      setOriginalTitle(document.title)
 
      const handleVisibilityChange = () => {
        if (document.hidden) {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              if (document.hidden) {
                document.title = messages[(Math.floor(Date.now() / 2500) % messages.length)]
              }
            }, 2500)
          }
        } else {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          // Restore the original title
          document.title = originalTitle
        }
      }
 
      document.addEventListener('visibilitychange', handleVisibilityChange)
 
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        clearInterval(intervalRef.current)
        // Restore the original title on unmount
        if (originalTitle) document.title = originalTitle
      }
    }
  }, [originalTitle])
 
  return null
}
 
export default TabAttentionTitle