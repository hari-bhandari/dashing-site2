'use client'

import { IntercomProvider } from 'react-use-intercom'

interface IntercomWrapperProps {
  children: React.ReactNode
}

export default function IntercomWrapper({ children }: IntercomWrapperProps) {
  return (
    <IntercomProvider
      appId="u4nj4fdg"
      autoBoot={true}
    >
      {children}
    </IntercomProvider>
  )
}
