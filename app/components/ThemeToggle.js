'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}