'use client'

import { useEffect, useState } from 'react'

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleWindowResize)

      handleWindowResize()
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
  }, [])
  return windowWidth
}
