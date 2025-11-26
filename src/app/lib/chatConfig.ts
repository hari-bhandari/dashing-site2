// Chat configuration
export const chatConfig = {
  // Set which chat service to use: 'intercom', 'chatwoot', or 'both'
  provider: 'chatwoot' as 'intercom' | 'chatwoot' | 'both',
  
  // Intercom settings
  intercom: {
    appId: 'u4nj4fdg',
    autoBoot: true,
  },
  
  // Chatwoot settings
  chatwoot: {
    websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || 'YOUR_CHATWOOT_WEBSITE_TOKEN',
    baseUrl: process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || 'https://app.chatwoot.com',
    settings: {
      hideMessageBubble: false,
      position: 'right' as 'left' | 'right',
      locale: 'en',
      type: 'standard' as 'standard' | 'expanded_bubble',
    }
  }
}
