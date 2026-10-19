import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
  it('merges multiple class names together', () => {
    expect(cn('flex', 'items-center', 'justify-between')).toBe('flex items-center justify-between')
  })

  it('handles conditional class names and falsy values', () => {
    expect(cn('base-class', false && 'hidden', true && 'block', null, undefined, '', 0)).toBe('base-class block')
  })

  it('resolves Tailwind CSS class conflicts using tailwind-merge', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2')
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
    expect(cn('text-sm', 'text-lg')).toBe('text-lg')
  })

  it('handles object argument forms correctly', () => {
    expect(cn({ 'bg-red-500': true, 'text-white': false, 'p-4': true })).toBe('bg-red-500 p-4')
  })

  it('handles array input formats', () => {
    expect(cn(['flex', 'items-center'], ['justify-center', false && 'hidden'])).toBe('flex items-center justify-center')
  })

  it('returns empty string when given no inputs or only falsy inputs', () => {
    expect(cn()).toBe('')
    expect(cn(null, undefined, false, '')).toBe('')
  })
})
