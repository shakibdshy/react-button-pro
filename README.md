# React Button Pro

A fully accessible, customizable React button component with ripple effect, loading state, and modern styling.

[![npm version](https://img.shields.io/npm/v/@shakibdshy/react-button-pro.svg)](https://www.npmjs.com/package/@shakibdshy/react-button-pro)
[![npm downloads](https://img.shields.io/npm/dm/@shakibdshy/react-button-pro.svg)](https://www.npmjs.com/package/@shakibdshy/react-button-pro)
[![License](https://img.shields.io/npm/l/@shakibdshy/react-button-pro.svg)](https://github.com/yourusername/react-button-pro/blob/main/LICENSE)

## Installation

```bash
npm install @shakibdshy/react-button-pro

or

pnpm add @shakibdshy/react-button-pro

or

bun add @shakibdshy/react-button-pro
```

### Usage

```jsx
import React from "react";
import { Button } from "@shakibdshy/react-button-pro";

function App() {
  return (
    <div>
      <Button color="primary" size="md">
        Click Me
      </Button>
    </div>
  );
}
export default App;
```


## Initial release (v1.0.0)

- 🎨 Initial release with multiple color and size variants
- 📚 Comprehensive documentation and examples

## Features

### Core Features

- ✨ Modern, lightweight button component
- 🔄 Controlled & Uncontrolled modes support
- 👥 Button group for managing multiple buttons
- 🎭 Customizable ripple effect
- ⌨️ Full keyboard navigation support
- 🎨 CSS-in-JS with Tailwind variants

### Styling & Customization

- 🎨 Multiple built-in color variants
  - Primary, Secondary, Success, Warning, Error, Info, Neutral
- 📐 Five size variants (sm, md, lg, xl, 2xl)
- 🔲 Configurable border radius
- 💅 Works with both Tailwind CSS and custom CSS
- 🎯 Custom styles without breaking accessibility

### Accessibility & UX

- ♿️ WAI-ARIA compliant
- 🔍 Screen reader friendly
- 🎯 Focus management and indicators
- 📱 Responsive and touch-friendly
- 🖱️ Click area optimization
- 🔄 Smooth transitions

### Developer Experience

- 📝 Written in TypeScript with full type definitions
- 🏃‍♂️ Tree-shakeable and optimized bundle
- 📚 Comprehensive documentation and examples
- 🔧 Easy to integrate and customize
- 📦 Small bundle size