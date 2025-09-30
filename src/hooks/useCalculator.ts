'use client'

import { useState, useCallback } from 'react'
import { CalculatorState, Operation } from '@/types/calculator'
import { calculate, isValidNumber } from '@/utils/calculator'

const initialState: CalculatorState = {
  currentValue: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
  hasError: false,
  history: []
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState)

  const handleNumber = useCallback((num: string) => {
    setState(prevState => {
      // If there's an error, reset first
      if (prevState.hasError) {
        return {
          ...initialState,
          currentValue: num
        }
      }

      // If waiting for new value or current value is '0', replace it
      if (prevState.waitingForNewValue || prevState.currentValue === '0') {
        return {
          ...prevState,
          currentValue: num,
          waitingForNewValue: false
        }
      }

      // Prevent multiple leading zeros
      if (prevState.currentValue === '0' && num === '0') {
        return prevState
      }

      // Limit the length to prevent overflow
      if (prevState.currentValue.length >= 12) {
        return prevState
      }

      return {
        ...prevState,
        currentValue: prevState.currentValue + num
      }
    })
  }, [])

  const handleDecimal = useCallback(() => {
    setState(prevState => {
      // If there's an error, reset first
      if (prevState.hasError) {
        return {
          ...initialState,
          currentValue: '0.'
        }
      }

      // If waiting for new value, start with '0.'
      if (prevState.waitingForNewValue) {
        return {
          ...prevState,
          currentValue: '0.',
          waitingForNewValue: false
        }
      }

      // Don't add decimal if one already exists
      if (prevState.currentValue.includes('.')) {
        return prevState
      }

      return {
        ...prevState,
        currentValue: prevState.currentValue + '.'
      }
    })
  }, [])

  const handleOperation = useCallback((operation: Operation) => {
    setState(prevState => {
      // If there's an error, reset but keep the operation
      if (prevState.hasError) {
        return {
          ...initialState,
          previousValue: '0',
          operation,
          waitingForNewValue: true
        }
      }

      // If we have a previous operation and we're not waiting for a new value, calculate first
      if (
        prevState.previousValue !== null &&
        prevState.operation !== null &&
        !prevState.waitingForNewValue
      ) {
        try {
          const result = calculate(
            parseFloat(prevState.previousValue),
            parseFloat(prevState.currentValue),
            prevState.operation
          )

          if (!isValidNumber(result)) {
            return {
              ...prevState,
              hasError: true,
              currentValue: 'Error'
            }
          }

          const newHistory = [
            ...prevState.history.slice(-9), // Keep last 9 entries
            {
              expression: `${prevState.previousValue} ${prevState.operation} ${prevState.currentValue}`,
              result: result.toString()
            }
          ]

          return {
            ...prevState,
            currentValue: result.toString(),
            previousValue: result.toString(),
            operation,
            waitingForNewValue: true,
            history: newHistory
          }
        } catch (error) {
          return {
            ...prevState,
            hasError: true,
            currentValue: 'Error'
          }
        }
      }

      return {
        ...prevState,
        previousValue: prevState.currentValue,
        operation,
        waitingForNewValue: true
      }
    })
  }, [])

  const handleEquals = useCallback(() => {
    setState(prevState => {
      // Can't calculate without previous value and operation
      if (prevState.previousValue === null || prevState.operation === null) {
        return prevState
      }

      // If there's an error, don't calculate
      if (prevState.hasError) {
        return prevState
      }

      try {
        const result = calculate(
          parseFloat(prevState.previousValue),
          parseFloat(prevState.currentValue),
          prevState.operation
        )

        if (!isValidNumber(result)) {
          return {
            ...prevState,
            hasError: true,
            currentValue: 'Error'
          }
        }

        const newHistory = [
          ...prevState.history.slice(-9), // Keep last 9 entries
          {
            expression: `${prevState.previousValue} ${prevState.operation} ${prevState.currentValue}`,
            result: result.toString()
          }
        ]

        return {
          ...prevState,
          currentValue: result.toString(),
          previousValue: null,
          operation: null,
          waitingForNewValue: true,
          history: newHistory
        }
      } catch (error) {
        return {
          ...prevState,
          hasError: true,
          currentValue: 'Error'
        }
      }
    })
  }, [])

  const handleClear = useCallback(() => {
    setState(initialState)
  }, [])

  const handleClearEntry = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      currentValue: '0',
      hasError: false
    }))
  }, [])

  const handleBackspace = useCallback(() => {
    setState(prevState => {
      // If there's an error or waiting for new value, clear current value
      if (prevState.hasError || prevState.waitingForNewValue) {
        return {
          ...prevState,
          currentValue: '0',
          hasError: false,
          waitingForNewValue: false
        }
      }

      // If current value has only one digit, set to '0'
      if (prevState.currentValue.length <= 1) {
        return {
          ...prevState,
          currentValue: '0'
        }
      }

      // Remove last character
      const newValue = prevState.currentValue.slice(0, -1)
      return {
        ...prevState,
        currentValue: newValue || '0'
      }
    })
  }, [])

  return {
    ...state,
    handleNumber,
    handleDecimal,
    handleOperation,
    handleEquals,
    handleClear,
    handleClearEntry,
    handleBackspace
  }
}