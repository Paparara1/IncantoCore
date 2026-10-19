import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useTheme } from 'next-themes'
import { ThemeProvider } from './theme-provider'

function TestChild() {
  const { theme, setTheme, forcedTheme, resolvedTheme } = useTheme()
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <span data-testid="forced-theme">{forcedTheme ?? 'none'}</span>
      <span data-testid="resolved-theme">{resolvedTheme ?? 'none'}</span>
      <button data-testid="set-dark" onClick={() => setTheme('dark')}>
        Set Dark
      </button>
      <button data-testid="set-light" onClick={() => setTheme('light')}>
        Set Light
      </button>
    </div>
  )
}

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </ThemeProvider>
    )

    expect(screen.getByTestId('child-1').textContent).toBe('Child 1')
    expect(screen.getByTestId('child-2').textContent).toBe('Child 2')
  })

  it('provides theme context with defaultProps / defaultTheme', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <TestChild />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme').textContent).toBe('light')
  })

  it('allows updating theme via useTheme hook', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <TestChild />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme').textContent).toBe('light')

    act(() => {
      screen.getByTestId('set-dark').click()
    })

    expect(screen.getByTestId('current-theme').textContent).toBe('dark')
  })

  it('passes forcedTheme prop correctly', () => {
    render(
      <ThemeProvider forcedTheme="dark">
        <TestChild />
      </ThemeProvider>
    )

    expect(screen.getByTestId('forced-theme').textContent).toBe('dark')
  })

  it('passes custom attribute and value mapping props correctly', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TestChild />
      </ThemeProvider>
    )

    expect(screen.getByTestId('current-theme').textContent).toBe('dark')
  })
})
