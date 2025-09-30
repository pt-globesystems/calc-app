# Calc App

A modern, sleek calculator application built with Next.js, featuring both light and dark themes with smooth transitions and a relaxed user interface.

## Features

- **Basic Math Operations**: Addition, subtraction, multiplication, and division
- **Theme Support**: Toggle between light and dark modes
- **Modern UI**: Clean, sleek design with smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Keyboard Support**: Use your keyboard for quick calculations
- **Error Handling**: Graceful handling of invalid operations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks and Context API
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd calc-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Basic Operations
- Click number buttons to input values
- Use operation buttons (+, -, ×, ÷) for calculations
- Press "=" or Enter to execute calculations
- Use "C" to clear the current input
- Use "AC" to clear all and reset

### Keyboard Shortcuts
- Numbers: `0-9`
- Operations: `+`, `-`, `*`, `/`
- Execute: `Enter` or `=`
- Clear: `Escape` or `c`
- Decimal: `.`

### Theme Toggle
- Click the theme toggle button in the top-right corner
- Supports system preference detection
- Smooth transitions between themes

## Project Structure

```
calc-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main calculator page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Calculator.tsx      # Main calculator component
│   │   ├── Display.tsx         # Calculator display
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── ButtonGrid.tsx      # Calculator button layout
│   │   └── ThemeToggle.tsx     # Theme switcher
│   ├── hooks/
│   │   ├── useCalculator.ts    # Calculator logic hook
│   │   └── useTheme.ts         # Theme management hook
│   ├── utils/
│   │   └── calculator.ts       # Calculator utility functions
│   ├── types/
│   │   └── calculator.ts       # TypeScript type definitions
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme context provider
│   └── styles/
│       ├── calculator.module.css # Calculator-specific styles
│       └── themes.css          # Theme variables
├── public/
│   ├── favicon.ico
│   └── calculator-icon.svg
└── config files...
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- Prettier for code formatting (recommended)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons from Lucide React