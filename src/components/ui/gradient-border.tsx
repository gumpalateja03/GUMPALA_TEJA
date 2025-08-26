"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface GradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  borderWidth?: number
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
  animate?: boolean
  speed?: number
  borderRadius?: string | number
}

export function GradientBorder({
  children,
  className,
  containerClassName,
  borderWidth = 2,
  gradientFrom = "#3b82f6",
  gradientVia = "#8b5cf6",
  gradientTo = "#ec4899",
  animate = true,
  speed = 5,
  borderRadius = "0.5rem",
}: GradientBorderProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (animate && isInView) {
      controls.start({
        backgroundPosition: [
          "0% 0%",
          "100% 0%",
          "100% 100%",
          "0% 100%",
          "0% 0%",
        ],
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      })
    }
  }, [animate, controls, isInView, speed])

  const borderStyle = {
    padding: `${borderWidth}px`,
    borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    background: `linear-gradient(45deg, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
    backgroundSize: animate ? "200% 200%" : "100% 100%",
    boxShadow: `0 0 20px -5px ${gradientFrom}80`,
  }

  const innerStyle = {
    borderRadius: `calc(${typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius} - ${borderWidth / 2}px)`,
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative inline-block w-full h-full",
        containerClassName
      )}
      style={animate ? {
        ...borderStyle,
        backgroundPosition: "0% 0%",
      } : borderStyle}
      animate={animate ? controls : undefined}
    >
      <div 
        className={cn(
          "w-full h-full bg-background overflow-hidden",
          className
        )}
        style={innerStyle}
      >
        {children}
      </div>
    </motion.div>
  )
}

// Variant with a subtle glow effect
export function GlowingGradientBorder({
  children,
  className,
  ...props
}: Omit<GradientBorderProps, 'animate' | 'speed'>) {
  return (
    <GradientBorder
      className={cn("group", className)}
      animate={true}
      speed={8}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {children}
    </GradientBorder>
  )
}
