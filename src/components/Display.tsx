'use client'

import React from 'react'

interface DisplayProps {
  value: string
  previousValue: string | null
  operation: string | null
  waitingForNewValue: boolean
}

const Display: React.FC<DisplayProps> = ({ 
  value, 
  previousValue, 
  operation, 
  waitingForNewValue 
}) => {
  // Format the display value to handle long numbers
  const formatDisplayValue = (val: string): string => {
    if (!val) return '0'
    
    if (val.length > 12) {
      const num = parseFloat(val)
      if (num > 999999999999 || num < -999999999999) {
        return num.toExponential(5)
      }
      return num.toPrecision(12).replace(/\.?0+$/, '')
    }
    return val
  }

  // Format the previous calculation display
  const formatPreviousCalculation = (): string => {
    if (!previousValue || !operation) return ''
    const formattedPrev = formatDisplayValue(previousValue || '0')
    return `${formattedPrev} ${operation}`
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4 theme-transition">
      {/* Previous calculation */}
      <div className="text-right mb-2 h-6">
        {(previousValue && operation) && (
          <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            {formatPreviousCalculation()}
          </div>
        )}
      </div>

      {/* Current display */}
      <div className="text-right">
        <div 
          className={`text-3xl font-bold font-mono text-gray-800 dark:text-gray-100 transition-all duration-200 ${
            waitingForNewValue ? 'text-blue-600 dark:text-blue-400' : ''
          }`}
          style={{ minHeight: '2.5rem' }}
        >
          {formatDisplayValue(value || '0')}
        </div>
      </div>

      {/* Visual indicator for waiting state */}
      {waitingForNewValue && (
        <div className="flex justify-end mt-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  )
}

export default Display
