'use client'

import { useEffect } from 'react'
import { chatConfig } from '../lib/chatConfig'

interface ChatwootWidgetProps {
  websiteToken?: string
  baseUrl?: string
}

export default function ChatwootWidget({ 
  websiteToken = chatConfig.chatwoot.websiteToken, 
  baseUrl = chatConfig.chatwoot.baseUrl 
}: ChatwootWidgetProps) {
  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = chatConfig.chatwoot.settings

    // Chatwoot SDK
    ;(function(d, t) {
      const BASE_URL = baseUrl
      const g = d.createElement(t) as HTMLScriptElement
      const s = d.getElementsByTagName(t)[0] as HTMLScriptElement
      g.src = BASE_URL + '/packs/js/sdk.js'
      g.defer = true
      g.async = true
      s.parentNode?.insertBefore(g, s)
      g.onload = function() {
        window.chatwootSDK.run({
          websiteToken: websiteToken,
          baseUrl: baseUrl
        })
      }
    })(document, 'script')
  }, [websiteToken, baseUrl])

  return null
}

// Extend the Window interface to include chatwoot properties
declare global {
  interface Window {
    chatwootSettings: {
      hideMessageBubble: boolean
      position: 'left' | 'right'
      locale: string
      type: 'standard' | 'expanded_bubble'
    }
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
  }
}
