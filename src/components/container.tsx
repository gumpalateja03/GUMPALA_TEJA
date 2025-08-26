import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padded?: boolean
}

const maxWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-full',
}

export function Container({
  as: Component = 'div',
  size = 'xl',
  className,
  children,
  padded = true,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        maxWidths[size],
        padded && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
