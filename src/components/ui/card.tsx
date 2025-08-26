import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Extended card with hover effect
interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'none'
  hoverContent?: React.ReactNode
}

const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  ({ className, hoverEffect = 'lift', hoverContent, children, ...props }, ref) => {
    const hoverClasses = {
      scale: 'hover:scale-[1.02]',
      lift: 'hover:-translate-y-1',
      glow: 'hover:shadow-lg hover:shadow-primary/10',
      none: ''
    }

    return (
      <div className={cn("group relative", className)}>
        <Card
          ref={ref}
          className={cn(
            "transition-all duration-300 ease-in-out",
            hoverClasses[hoverEffect],
            hoverContent && "hover:opacity-0 hover:invisible"
          )}
          {...props}
        >
          {children}
        </Card>
        {hoverContent && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {hoverContent}
          </div>
        )}
      </div>
    )
  }
)
HoverCard.displayName = "HoverCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  HoverCard,
}
