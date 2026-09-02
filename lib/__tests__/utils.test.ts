import { describe, expect, it } from 'vitest'
import { cn } from '../utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('c-1', 'c-2')).toBe('c-1 c-2')
  })

  it('handles conditional class names with objects', () => {
    expect(cn('c-1', { 'c-2': true, 'c-3': false })).toBe('c-1 c-2')
  })

  it('handles array inputs including nested arrays', () => {
    expect(cn(['c-1', 'c-2'], ['c-3', ['c-4']])).toBe('c-1 c-2 c-3 c-4')
  })

  it('filters out falsy, null, and undefined values', () => {
    expect(cn('c-1', false, null, undefined, '', 0, 'c-2')).toBe('c-1 c-2')
  })

  it('correctly resolves conflicting Tailwind CSS classes', () => {
    expect(cn('px-2 py-1', 'p-4')).toBe('p-4')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
    expect(cn('bg-red-500', 'bg-blue-500/50')).toBe('bg-blue-500/50')
  })

  it('returns empty string when no arguments or only falsy arguments are provided', () => {
    expect(cn()).toBe('')
    expect(cn(null, undefined, false, '')).toBe('')
  })
})
