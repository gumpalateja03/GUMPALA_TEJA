"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
  animate?: boolean
  speed?: number
}

export function AnimatedGradientText({
  children,
  className,
  from = "from-primary",
  via = "via-blue-500",
  to = "to-purple-600",
  animate = true,
  speed = 15,
  ...props
}: AnimatedGradientTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (animate && isInView) {
      controls.start({
        backgroundSize: "200% 200%",
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

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r",
        from,
        via,
        to,
        className
      )}
      {...props}
    >
      {animate ? (
        <motion.span
          className="block"
          animate={controls}
          style={{
            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {children}
        </motion.span>
      ) : (
        <span className="block">{children}</span>
      )}
    </span>
  )
}
