import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  showDivider?: boolean
}

const sizeStyles = {
  sm: {
    title: 'text-2xl md:text-3xl font-bold',
    subtitle: 'text-xs md:text-sm font-medium tracking-wider uppercase',
    description: 'mt-2 text-sm md:text-base text-muted-foreground',
  },
  md: {
    title: 'text-3xl md:text-4xl font-bold',
    subtitle: 'text-sm md:text-base font-medium tracking-wider uppercase',
    description: 'mt-3 text-base md:text-lg text-muted-foreground',
  },
  lg: {
    title: 'text-4xl md:text-5xl font-bold',
    subtitle: 'text-base md:text-lg font-medium tracking-wider uppercase',
    description: 'mt-4 text-lg md:text-xl text-muted-foreground',
  },
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  align = 'center',
  size = 'md',
  showDivider = false,
}: SectionHeaderProps) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  const styles = sizeStyles[size]

  return (
    <div className={cn('flex flex-col', alignment[align], className)}>
      {subtitle && (
        <span
          className={cn(
            'text-primary font-medium tracking-wider',
            styles.subtitle,
            subtitleClassName
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'mt-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent',
          styles.title,
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-3xl',
            styles.description,
            descriptionClassName,
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto'
          )}
        >
          {description}
        </p>
      )}
      {showDivider && (
        <div
          className={cn(
            'mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/20',
            align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
          )}
        />
      )}
    </div>
  )
}
