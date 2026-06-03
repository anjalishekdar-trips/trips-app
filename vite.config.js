import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Trips',
        short_name: 'My Trips',
        description: 'Our travel itineraries',
        theme_color: '#1B2A4A',
        background_color: '#1B2A4A',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
    src: 'icon-512.jpg',
    sizes: '512x512',
    type: 'image/jpeg'
  },
  {
    src: 'icon-512.jpg',
    sizes: '512x512',
    type: 'image/jpeg',
    purpose: 'any maskable'
  }
]
      }
    })
  ]
})
