import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from './use-mobile'

describe('useIsMobile', () => {
  let listeners: Array<(e: Event) => void> = []
  let mockMatchMedia: ReturnType<typeof vi.fn>

  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
  }

  beforeEach(() => {
    listeners = []
    mockMatchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn((event: string, callback: (e: Event) => void) => {
        if (event === 'change') {
          listeners.push(callback)
        }
      }),
      removeEventListener: vi.fn((event: string, callback: (e: Event) => void) => {
        if (event === 'change') {
          listeners = listeners.filter((l) => l !== callback)
        }
      }),
      dispatchEvent: vi.fn(),
    }))

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: mockMatchMedia,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('queries window.matchMedia with max-width 767px', () => {
    setWindowWidth(1024)
    renderHook(() => useIsMobile())
    expect(mockMatchMedia).toHaveBeenCalledWith('(max-width: 767px)')
  })

  it('returns false for desktop window width (>= 768px)', () => {
    setWindowWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('returns true for mobile window width (< 768px)', () => {
    setWindowWidth(500)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('handles exact boundary width 767px as mobile and 768px as desktop', () => {
    setWindowWidth(767)
    const { result: mobileResult } = renderHook(() => useIsMobile())
    expect(mobileResult.current).toBe(true)

    setWindowWidth(768)
    const { result: desktopResult } = renderHook(() => useIsMobile())
    expect(desktopResult.current).toBe(false)
  })

  it('updates state when media query change event is triggered', () => {
    setWindowWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    // Resize to mobile
    setWindowWidth(500)
    act(() => {
      listeners.forEach((listener) => listener(new Event('change')))
    })
    expect(result.current).toBe(true)

    // Resize back to desktop
    setWindowWidth(1024)
    act(() => {
      listeners.forEach((listener) => listener(new Event('change')))
    })
    expect(result.current).toBe(false)
  })

  it('removes change listener on unmount', () => {
    setWindowWidth(1024)
    const { unmount } = renderHook(() => useIsMobile())
    expect(listeners.length).toBe(1)

    unmount()
    expect(listeners.length).toBe(0)
  })
})
