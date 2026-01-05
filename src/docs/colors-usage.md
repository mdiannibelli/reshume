# Color Usage Guide

This project uses custom CSS variables to maintain a consistent color palette throughout the application.

## Available Variables

### Primary Colors

- `--primary`
- `--primary-hover`
- `--primary-light`
- `--primary-dark`

### Secondary Colors

- `--secondary`
- `--secondary-hover`

### Background Colors

- `--background`
- `--background-secondary`

### Text Colors

- `--text-primary`
- `--text-secondary`
- `--text-tertiary`

### Border Colors

- `--border`
- `--border-hover`

### Status Colors

- `--success`
- `--error`
- `--warning`
- `--info`

## How to Use Variables

### 1. With Tailwind CSS (Recommended)

Use Tailwind's arbitrary value syntax. This is the preferred method:

```tsx
// Before
<button className="bg-red-500 hover:bg-red-600 text-white">
  Click me
</button>

// After
<button className="bg-(--primary) hover:bg-(--primary-hover) text-white">
  Click me
</button>
```

### 2. With Inline Styles (Avoid when possible)

Use inline styles only when Tailwind classes are not sufficient:

```tsx
<button style={{ backgroundColor: "var(--primary)" }}>Click me</button>
```

> **Note:** Prefer using Tailwind CSS classes over inline styles whenever possible for better maintainability and consistency.

## Complete Examples

### Primary Button

```tsx
<button className="px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white rounded-lg font-medium transition-colors">
  Submit
</button>
```

### Card with Secondary Background

```tsx
<div className="p-6 bg-(--background-secondary) border border-(--border) rounded-lg">
  <h2 className="text-(--text-primary)">Title</h2>
  <p className="text-(--text-secondary)">Description</p>
</div>
```

### Text with Different Levels

```tsx
<h1 className="text-(--text-primary)">Main Title</h1>
<p className="text-(--text-secondary)">Secondary text</p>
<span className="text-(--text-tertiary)">Tertiary text</span>
```

### Status Alerts

```tsx
<div className="bg-(--success) text-white p-4 rounded">
  Success message
</div>

<div className="bg-(--error) text-white p-4 rounded">
  Error message
</div>

<div className="bg-(--warning) text-white p-4 rounded">
  Warning message
</div>

<div className="bg-(--info) text-white p-4 rounded">
  Info message
</div>
```

## Migration Guide

To migrate existing code:

1. **Replace hardcoded colors:**

   - `bg-red-500` → `bg-(--primary)`
   - `bg-red-600` → `bg-(--primary-hover)`
   - `bg-black` → `bg-(--background)`
   - `text-white` → `text-(--text-primary)`

2. **Keep Tailwind utilities:**

   - `rounded-lg`, `p-4`, `flex`, etc. continue to work the same way
   - Only colors change

3. **Benefits:**

   - Change the entire palette from a single place (`index.css`)
   - Consistency across the entire application
   - Easy theme implementation (dark/light mode)
