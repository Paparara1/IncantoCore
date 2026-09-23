import { describe, expect, it } from 'vitest'
import { cn } from '../utils'

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1')
  })

  it('should handle conditional and falsy values', () => {
    expect(cn('px-2', false && 'hidden', null, undefined, '', 0)).toBe('px-2')
    expect(cn('px-2', true && 'block')).toBe('px-2 block')
  })

  it('should resolve Tailwind CSS conflicts using twMerge', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
    expect(cn('bg-red-500 bg-green-500', 'bg-blue-500')).toBe('bg-blue-500')
  })

  it('should handle object syntax for conditional classes', () => {
    expect(
      cn({
        'bg-red-500': true,
        'text-white': false,
        'p-4': true,
      })
    ).toBe('bg-red-500 p-4')
  })

  it('should handle arrays and nested structures', () => {
    expect(cn(['px-2', 'py-1'], ['text-sm'])).toBe('px-2 py-1 text-sm')
    expect(
      cn('base', ['px-2', { 'py-1': true, hidden: false }])
    ).toBe('base px-2 py-1')
  })

  it('should return an empty string when given no arguments or only falsy values', () => {
    expect(cn()).toBe('')
    expect(cn(null, undefined, false, '')).toBe('')
  })
})
