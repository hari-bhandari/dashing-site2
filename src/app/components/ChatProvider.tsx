'use client'

import { ReactNode } from 'react'
import { IntercomProvider } from 'react-use-intercom'
import ChatwootWidget from './ChatwootWidget'
import { chatConfig } from '../lib/chatConfig'

interface ChatProviderProps {
  children: ReactNode
}

export default function ChatProvider({ children }: ChatProviderProps) {
  const { provider, intercom, chatwoot } = chatConfig

  // Render based on configuration
  if (provider === 'intercom') {
    return (
      <IntercomProvider appId={intercom.appId} autoBoot={intercom.autoBoot}>
        {children}
      </IntercomProvider>
    )
  }

  if (provider === 'chatwoot') {
    return (
      <>
        {children}
        <ChatwootWidget 
          websiteToken={chatwoot.websiteToken} 
          baseUrl={chatwoot.baseUrl}
        />
      </>
    )
  }

  if (provider === 'both') {
    return (
      <IntercomProvider appId={intercom.appId} autoBoot={intercom.autoBoot}>
        {children}
        <ChatwootWidget 
          websiteToken={chatwoot.websiteToken} 
          baseUrl={chatwoot.baseUrl}
        />
      </IntercomProvider>
    )
  }

  // Default: just children without any chat
  return <>{children}</>
}
