'use client'

import React from 'react'
import Display from './Display'
import ButtonGrid from './ButtonGrid'
import ThemeToggle from './ThemeToggle'
import { useCalculator } from '@/hooks/useCalculator'

const Calculator: React.FC = () => {
  const {
    display,
    previousValue,
    operation,
    waitingForNewValue,
    handleNumber,
    handleOperation,
    handleEquals,
    handleClear,
    handleDecimal,
    handleBackspace
  } = useCalculator()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 theme-transition">
      <div className="w-full max-w-sm mx-auto">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Calculator
          </h1>
          <ThemeToggle />
        </div>

        {/* Calculator Container */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 theme-transition fade-in">
          {/* Display */}
          <div className="mb-6">
            <Display 
              value={display}
              previousValue={previousValue}
              operation={operation}
              waitingForNewValue={waitingForNewValue}
            />
          </div>

          {/* Button Grid */}
          <ButtonGrid
            onNumber={handleNumber}
            onOperation={handleOperation}
            onEquals={handleEquals}
            onClear={handleClear}
            onDecimal={handleDecimal}
            onBackspace={handleBackspace}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Calculator