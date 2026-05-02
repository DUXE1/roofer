import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'call' | 'outline-light' | 'default'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200'
    
    const variantClasses = {
      call: 'bg-cta text-white hover:bg-opacity-90 active:scale-95',
      'outline-light': 'border border-white/30 text-white hover:bg-white/10 active:scale-95',
      default: 'bg-surface-dark text-white hover:bg-opacity-90',
    }

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm gap-2',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-3',
      xl: 'px-8 py-4 text-lg gap-3',
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: classes,
        ...props,
      })
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
