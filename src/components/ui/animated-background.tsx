"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue, useTransform, MotionValue } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  className?: string
  children?: React.ReactNode
  gridSize?: number
  dotSize?: number
  dotColor?: string
  dotOpacity?: number
  gradientFrom?: string
  gradientTo?: string
  gradientOpacity?: number
  speed?: number
}

export function AnimatedBackground({
  className,
  children,
  gridSize = 60,
  dotSize = 1,
  dotColor = "currentColor",
  dotOpacity = 0.15,
  gradientFrom = "#3b82f6",
  gradientTo = "#8b5cf6",
  gradientOpacity = 0.3,
  speed = 40,
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top } = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return
      const { width, height } = ref.current.getBoundingClientRect()
      mouseX.set(width / 2)
      mouseY.set(height / 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const gradientX = useTransform(mouseX, [0, 1000], [0, 100])
  const gradientY = useTransform(mouseY, [0, 1000], [0, 100])
  const gradient = useMotionTemplate`radial-gradient(at ${gradientX}% ${gradientY}%, ${gradientFrom}00, ${gradientTo}${Math.round(gradientOpacity * 255).toString(16).padStart(2, '0')})`

  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full overflow-hidden", className)}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize + 1}px)`,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            opacity: dotOpacity,
          }}
        />
        <motion.div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: gradient,
          }}
        />
      </div>
      {children}
    </div>
  )
}
