import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Plugin to handle Figma asset imports
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-plugin',
    enforce: 'pre', // Run this plugin before others
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        // Return a virtual module ID that we can handle
        return '\0' + id
      }
      return null
    },
    load(id) {
      // Handle the virtual module ID
      if (id.startsWith('\0figma:asset/')) {
        const actualId = id.replace('\0', '')
        // Extract the filename from the figma:asset path
        const assetPath = actualId.replace('figma:asset/', '')
        const filename = assetPath.split('/').pop() || 'placeholder.png'
        
        // Try to find the asset in public directory first
        const publicDir = path.resolve(__dirname, 'public')
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true })
        }
        
        const assetsDir = path.resolve(publicDir, 'assets')
        const publicPath = path.resolve(assetsDir, filename)
        
        if (fs.existsSync(publicPath)) {
          // Return the actual asset path - Vite will serve from public directory
          // Use absolute path with /assets/ prefix since files are in public/assets/
          return `export default ${JSON.stringify(`/assets/${filename}`)}`
        }
        
        // Return a placeholder data URL for missing assets
        // Using a transparent 1x1 PNG
        const placeholderDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
        return `export default ${JSON.stringify(placeholderDataUrl)}`
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
