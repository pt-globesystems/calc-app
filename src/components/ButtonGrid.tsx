'use client'

import React from 'react'
import Button from './Button'

interface ButtonGridProps {
  onNumber: (num: string) => void
  onOperation: (op: string) => void
  onEquals: () => void
  onClear: () => void
  onDecimal: () => void
  onBackspace: () => void
}

const ButtonGrid: React.FC<ButtonGridProps> = ({
  onNumber,
  onOperation,
  onEquals,
  onClear,
  onDecimal,
  onBackspace
}) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {/* Row 1 */}
      <Button 
        variant="clear" 
        onClick={onClear}
        aria-label="Clear all"
      >
        AC
      </Button>
      <Button 
        variant="secondary" 
        onClick={onBackspace}
        aria-label="Backspace"
      >
        ⌫
      </Button>
      <Button 
        variant="operator" 
        onClick={() => onOperation('%')}
        aria-label="Percentage"
      >
        %
      </Button>
      <Button 
        variant="operator" 
        onClick={() => onOperation('÷')}
        aria-label="Divide"
      >
        ÷
      </Button>

      {/* Row 2 */}
      <Button 
        onClick={() => onNumber('7')}
        aria-label="Seven"
      >
        7
      </Button>
      <Button 
        onClick={() => onNumber('8')}
        aria-label="Eight"
      >
        8
      </Button>
      <Button 
        onClick={() => onNumber('9')}
        aria-label="Nine"
      >
        9
      </Button>
      <Button 
        variant="operator" 
        onClick={() => onOperation('×')}
        aria-label="Multiply"
      >
        ×
      </Button>

      {/* Row 3 */}
      <Button 
        onClick={() => onNumber('4')}
        aria-label="Four"
      >
        4
      </Button>
      <Button 
        onClick={() => onNumber('5')}
        aria-label="Five"
      >
        5
      </Button>
      <Button 
        onClick={() => onNumber('6')}
        aria-label="Six"
      >
        6
      </Button>
      <Button 
        variant="operator" 
        onClick={() => onOperation('-')}
        aria-label="Subtract"
      >
        -
      </Button>

      {/* Row 4 */}
      <Button 
        onClick={() => onNumber('1')}
        aria-label="One"
      >
        1
      </Button>
      <Button 
        onClick={() => onNumber('2')}
        aria-label="Two"
      >
        2
      </Button>
      <Button 
        onClick={() => onNumber('3')}
        aria-label="Three"
      >
        3
      </Button>
      <Button 
        variant="operator" 
        onClick={() => onOperation('+')}
        aria-label="Add"
      >
        +
      </Button>

      {/* Row 5 */}
      <Button 
        onClick={() => onNumber('0')}
        className="col-span-2"
        aria-label="Zero"
      >
        0
      </Button>
      <Button 
        onClick={onDecimal}
        aria-label="Decimal point"
      >
        .
      </Button>
      <Button 
        variant="equals" 
        onClick={onEquals}
        aria-label="Equals"
      >
        =
      </Button>
    </div>
  )
}

export default ButtonGrid