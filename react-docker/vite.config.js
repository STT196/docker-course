import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // server: {
    // //   host: "172.25.82.128",
    //   port:4000,
    // }
})
