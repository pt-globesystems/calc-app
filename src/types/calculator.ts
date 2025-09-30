/**
 * Supported mathematical operations
 */
export type Operation = '+' | '-' | '*' | '/'

/**
 * Calculator button types for styling and behavior
 */
export type ButtonType = 
  | 'number' 
  | 'operator' 
  | 'equals' 
  | 'clear' 
  | 'clear-entry'
  | 'decimal'
  | 'backspace'

/**
 * History entry for calculation tracking
 */
export interface HistoryEntry {
  expression: string
  result: string
  timestamp?: Date
}

/**
 * Main calculator state interface
 */
export interface CalculatorState {
  /** Current display value */
  currentValue: string
  
  /** Previous value stored for calculation */
  previousValue: string | null
  
  /** Current operation selected */
  operation: Operation | null
  
  /** Whether calculator is waiting for new number input */
  waitingForNewValue: boolean
  
  /** Whether calculator is in error state */
  hasError: boolean
  
  /** Calculation history */
  history: HistoryEntry[]
}

/**
 * Calculator button configuration
 */
export interface ButtonConfig {
  /** Display text/symbol */
  label: string
  
  /** Button type for styling */
  type: ButtonType
  
  /** Value to send when pressed */
  value: string
  
  /** CSS classes for custom styling */
  className?: string
  
  /** Whether button spans multiple columns */
  colSpan?: number
  
  /** Whether button spans multiple rows */
  rowSpan?: number
  
  /** Accessibility label */
  ariaLabel?: string
}

/**
 * Theme types
 */
export type Theme = 'light' | 'dark'

/**
 * Theme context interface
 */
export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

/**
 * Calculator hook return type
 */
export interface UseCalculatorReturn extends CalculatorState {
  /** Handle number input */
  handleNumber: (num: string) => void
  
  /** Handle decimal point input */
  handleDecimal: () => void
  
  /** Handle operation input */
  handleOperation: (operation: Operation) => void
  
  /** Handle equals/calculate */
  handleEquals: () => void
  
  /** Handle clear all */
  handleClear: () => void
  
  /** Handle clear entry */
  handleClearEntry: () => void
  
  /** Handle backspace */
  handleBackspace: () => void
}

/**
 * Display component props
 */
export interface DisplayProps {
  value: string
  previousValue: string | null
  operation: Operation | null
  waitingForNewValue: boolean
  hasError?: boolean
}

/**
 * Button component props
 */
export interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'default' | 'operator' | 'equals' | 'clear' | 'secondary'
  className?: string
  disabled?: boolean
  ariaLabel?: string
}

/**
 * Button grid component props
 */
export interface ButtonGridProps {
  onNumber: (num: string) => void
  onOperation: (op: Operation) => void
  onEquals: () => void
  onClear: () => void
  onClearEntry: () => void
  onDecimal: () => void
  onBackspace: () => void
}

/**
 * Calculator component props
 */
export interface CalculatorProps {
  className?: string
  showHistory?: boolean
  maxHistoryEntries?: number
}

/**
 * Calculation result type
 */
export interface CalculationResult {
  result: number
  error?: string
  isValid: boolean
}

/**
 * Keyboard event mapping
 */
export interface KeyboardMapping {
  [key: string]: {
    type: ButtonType
    value: string
    handler: string
  }
}

/**
 * Calculator settings/preferences
 */
export interface CalculatorSettings {
  /** Maximum decimal places to display */
  maxDecimalPlaces: number
  
  /** Whether to use scientific notation for large numbers */
  useScientificNotation: boolean
  
  /** Maximum number of digits to display */
  maxDisplayDigits: number
  
  /** Whether to play sound on button press */
  soundEnabled: boolean
  
  /** Whether to show calculation history */
  showHistory: boolean
  
  /** Maximum number of history entries to keep */
  maxHistoryEntries: number
}