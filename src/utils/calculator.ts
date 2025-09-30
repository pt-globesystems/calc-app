import { Operation } from '@/types/calculator'

/**
 * Performs basic mathematical calculations
 * @param a - First operand
 * @param b - Second operand
 * @param operation - Mathematical operation to perform
 * @returns Result of the calculation
 * @throws Error for invalid operations or division by zero
 */
export const calculate = (a: number, b: number, operation: Operation): number => {
  // Validate inputs
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid number provided')
  }

  let result: number

  switch (operation) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    case '/':
      if (b === 0) {
        throw new Error('Division by zero')
      }
      result = a / b
      break
    default:
      throw new Error(`Unsupported operation: ${operation}`)
  }

  // Handle floating point precision issues
  result = parseFloat(result.toPrecision(12))

  // Validate result
  if (!isValidNumber(result)) {
    throw new Error('Calculation resulted in invalid number')
  }

  return result
}

/**
 * Checks if a number is valid (not NaN, not infinite)
 * @param num - Number to validate
 * @returns True if number is valid
 */
export const isValidNumber = (num: number): boolean => {
  return !isNaN(num) && isFinite(num)
}

/**
 * Formats a number for display, handling very large/small numbers
 * @param num - Number to format
 * @param maxLength - Maximum length of the formatted string
 * @returns Formatted number string
 */
export const formatDisplayNumber = (num: string, maxLength: number = 12): string => {
  // If it's not a valid number string, return as is
  if (num === 'Error' || num === 'Infinity' || num === '-Infinity') {
    return num
  }

  const numValue = parseFloat(num)
  
  if (!isValidNumber(numValue)) {
    return 'Error'
  }

  // Handle special cases
  if (numValue === 0) {
    return '0'
  }

  // If the number is too long, use scientific notation or truncate
  if (num.length > maxLength) {
    // For very large or very small numbers, use scientific notation
    if (Math.abs(numValue) >= 1e10 || (Math.abs(numValue) < 1e-6 && Math.abs(numValue) > 0)) {
      return numValue.toExponential(6)
    }
    
    // For other cases, limit decimal places
    const decimalIndex = num.indexOf('.')
    if (decimalIndex !== -1) {
      const integerPart = num.substring(0, decimalIndex)
      const availableDecimals = maxLength - integerPart.length - 1 // -1 for the decimal point
      
      if (availableDecimals > 0) {
        return numValue.toFixed(Math.min(availableDecimals, 6))
      } else {
        return integerPart
      }
    }
  }

  return num
}

/**
 * Validates if a string represents a valid number input
 * @param input - String to validate
 * @returns True if input is valid
 */
export const isValidInput = (input: string): boolean => {
  // Allow empty string, digits, single decimal point, and negative sign at start
  const validPattern = /^-?(\d+\.?\d*|\.\d+)$/
  return validPattern.test(input) || input === '' || input === '-'
}

/**
 * Sanitizes user input to ensure it's a valid number string
 * @param input - Raw input string
 * @returns Sanitized input string
 */
export const sanitizeInput = (input: string): string => {
  // Remove any non-numeric characters except decimal point and negative sign
  let sanitized = input.replace(/[^0-9.-]/g, '')
  
  // Ensure only one decimal point
  const decimalCount = (sanitized.match(/\./g) || []).length
  if (decimalCount > 1) {
    const firstDecimalIndex = sanitized.indexOf('.')
    sanitized = sanitized.substring(0, firstDecimalIndex + 1) + 
                sanitized.substring(firstDecimalIndex + 1).replace(/\./g, '')
  }
  
  // Ensure negative sign is only at the beginning
  if (sanitized.includes('-')) {
    const isNegative = sanitized.startsWith('-')
    sanitized = sanitized.replace(/-/g, '')
    if (isNegative) {
      sanitized = '-' + sanitized
    }
  }
  
  return sanitized
}

/**
 * Gets the appropriate error message for display
 * @param error - Error object or message
 * @returns User-friendly error message
 */
export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'string') {
    return error
  }
  
  if (error instanceof Error) {
    switch (error.message) {
      case 'Division by zero':
        return 'Cannot divide by zero'
      case 'Invalid number provided':
        return 'Invalid input'
      case 'Calculation resulted in invalid number':
        return 'Math Error'
      default:
        return 'Error'
    }
  }
  
  return 'Unknown Error'
}