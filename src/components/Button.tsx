'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'default' | 'operator' | 'equals' | 'clear' | 'secondary'
  className?: string
  disabled?: boolean
  'aria-label'?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'default',
  className = '',
  disabled = false,
  'aria-label': ariaLabel
}) => {
  const getVariantClasses = (): string => {
    const baseClasses = 'h-16 rounded-2xl font-semibold text-lg transition-all duration-200 scale-press theme-transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    switch (variant) {
      case 'operator':
        return `${baseClasses} bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl`
      
      case 'equals':
        return `${baseClasses} bg-green-500 hover:bg-green-600 active:bg-green-700 text-white focus:ring-green-500 shadow-lg hover:shadow-xl`
      
      case 'clear':
        return `${baseClasses} bg-red-500 hover:bg-red-600 active:bg-red-700 text-white focus:ring-red-500 shadow-lg hover:shadow-xl`
      
      case 'secondary':
        return `${baseClasses} bg-gray-300 hover:bg-gray-400 active:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500 dark:active:bg-gray-400 text-gray-800 dark:text-gray-200 focus:ring-gray-500 shadow-md hover:shadow-lg`
      
      default:
        return `${baseClasses} bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500 text-gray-800 dark:text-gray-200 focus:ring-gray-500 shadow-md hover:shadow-lg`
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${getVariantClasses()} ${className}`}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button