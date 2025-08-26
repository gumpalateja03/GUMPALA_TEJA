"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  attribute?: string | boolean
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  enableColorScheme?: boolean
  storageKey?: string
  themes?: string[]
  forcedTheme?: string
}

export function ThemeProvider({ 
  children, 
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props 
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

// Create a custom hook to use the theme
export function useTheme() {
  const { 
    theme, 
    setTheme, 
    systemTheme, 
    resolvedTheme 
  } = useNextTheme()
  
  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    toggleTheme
  }
}

// Theme toggle button component
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}

// This is a client component that ensures the UI matches the server-rendered HTML
// to prevent hydration mismatch errors
export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return <>{children}</>
  }
  
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
