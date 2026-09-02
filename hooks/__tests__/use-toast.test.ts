import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { reducer } from '../use-toast'

describe('use-toast reducer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('ADD_TOAST', () => {
    it('should add a toast to an empty state', () => {
      const initialState = { toasts: [] }
      const newToast = { id: '1', title: 'Toast 1', open: true }

      const nextState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast: newToast,
      })

      expect(nextState.toasts).toHaveLength(1)
      expect(nextState.toasts[0]).toEqual(newToast)
    })

    it('should prepend new toast and limit toasts array to TOAST_LIMIT (1)', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Toast 1', open: true }],
      }
      const newToast = { id: '2', title: 'Toast 2', open: true }

      const nextState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast: newToast,
      })

      expect(nextState.toasts).toHaveLength(1)
      expect(nextState.toasts[0]).toEqual(newToast)
    })
  })

  describe('UPDATE_TOAST', () => {
    it('should update an existing toast by id', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Old Title', description: 'Old Description' },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '1', title: 'New Title' },
      })

      expect(nextState.toasts[0]).toEqual({
        id: '1',
        title: 'New Title',
        description: 'Old Description',
      })
    })

    it('should not update any toast if id does not match', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Old Title' }],
      }

      const nextState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '2', title: 'New Title' },
      })

      expect(nextState.toasts[0]).toEqual({ id: '1', title: 'Old Title' })
    })
  })

  describe('DISMISS_TOAST', () => {
    it('should dismiss a specific toast by toastId setting open to false', () => {
      const initialState = {
        toasts: [
          { id: 'dismiss-1', title: 'Toast 1', open: true },
          { id: 'dismiss-2', title: 'Toast 2', open: true },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: 'dismiss-1',
      })

      expect(nextState.toasts[0].open).toBe(false)
      expect(nextState.toasts[1].open).toBe(true)
    })

    it('should dismiss all toasts if toastId is undefined', () => {
      const initialState = {
        toasts: [
          { id: 'dismiss-all-1', title: 'Toast 1', open: true },
          { id: 'dismiss-all-2', title: 'Toast 2', open: true },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: undefined,
      })

      expect(nextState.toasts[0].open).toBe(false)
      expect(nextState.toasts[1].open).toBe(false)
    })

    it('should add dismissed toast to remove queue and process timeout', () => {
      const initialState = {
        toasts: [{ id: 'queue-test-1', title: 'Toast 1', open: true }],
      }

      reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: 'queue-test-1',
      })

      expect(vi.getTimerCount()).toBe(1)

      vi.advanceTimersByTime(1000000)
      expect(vi.getTimerCount()).toBe(0)
    })
  })

  describe('REMOVE_TOAST', () => {
    it('should remove a specific toast by toastId', () => {
      const initialState = {
        toasts: [
          { id: 'remove-1', title: 'Toast 1' },
          { id: 'remove-2', title: 'Toast 2' },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: 'remove-1',
      })

      expect(nextState.toasts).toHaveLength(1)
      expect(nextState.toasts[0].id).toBe('remove-2')
    })

    it('should remove all toasts if toastId is undefined', () => {
      const initialState = {
        toasts: [
          { id: 'remove-all-1', title: 'Toast 1' },
          { id: 'remove-all-2', title: 'Toast 2' },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: undefined,
      })

      expect(nextState.toasts).toHaveLength(0)
    })

    it('should not modify state if non-existing toastId is provided', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Toast 1' }],
      }

      const nextState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: '999',
      })

      expect(nextState.toasts).toHaveLength(1)
      expect(nextState.toasts[0].id).toBe('1')
    })
  })
})
