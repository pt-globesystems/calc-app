import { Metadata } from 'next'
import Calculator from '@/components/Calculator'

export const metadata: Metadata = {
  title: 'Calculator - Calc App',
  description: 'Perform basic math operations with our sleek and modern calculator interface'
}

export default function HomePage() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors duration-300">
          Calc App
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
          Modern calculator with style
        </p>
      </div>
      
      <Calculator />
      
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-500 transition-colors duration-300">
          Supports basic arithmetic operations
        </p>
      </div>
    </div>
  )
}