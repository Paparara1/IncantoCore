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
      const newToast = { id: '1', title: 'Test Toast', open: true }

      const newState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast: newToast,
      })

      expect(newState.toasts).toHaveLength(1)
      expect(newState.toasts[0]).toEqual(newToast)
    })

    it('should enforce TOAST_LIMIT (limit = 1) by prepending and capping at 1', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const initialState = { toasts: [toast1] }

      const toast2 = { id: '2', title: 'Toast 2', open: true }
      const newState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast: toast2,
      })

      expect(newState.toasts).toHaveLength(1)
      expect(newState.toasts[0]).toEqual(toast2)
    })

    it('should preserve other properties on the state object', () => {
      const initialState = { toasts: [], customProp: 'value' } as any
      const newToast = { id: '1', title: 'Test Toast', open: true }

      const newState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast: newToast,
      })

      expect((newState as any).customProp).toBe('value')
    })
  })

  describe('UPDATE_TOAST', () => {
    it('should update an existing toast by id', () => {
      const toast1 = { id: '1', title: 'Original Title', description: 'Desc 1', open: true }
      const initialState = { toasts: [toast1] }

      const newState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '1', title: 'Updated Title' },
      })

      expect(newState.toasts).toHaveLength(1)
      expect(newState.toasts[0]).toEqual({
        id: '1',
        title: 'Updated Title',
        description: 'Desc 1',
        open: true,
      })
    })

    it('should not modify toasts if action toast id does not match', () => {
      const toast1 = { id: '1', title: 'Original Title', open: true }
      const initialState = { toasts: [toast1] }

      const newState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '999', title: 'Non-existent' },
      })

      expect(newState.toasts).toHaveLength(1)
      expect(newState.toasts[0]).toEqual(toast1)
    })
  })

  describe('DISMISS_TOAST', () => {
    it('should set open to false for a specified toastId', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const initialState = { toasts: [toast1] }

      const newState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: '1',
      })

      expect(newState.toasts[0].open).toBe(false)
    })

    it('should set open to false for all toasts when toastId is undefined', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const toast2 = { id: '2', title: 'Toast 2', open: true }
      const initialState = { toasts: [toast1, toast2] }

      const newState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: undefined,
      })

      expect(newState.toasts[0].open).toBe(false)
      expect(newState.toasts[1].open).toBe(false)
    })

    it('should leave non-matching toast open when toastId is specified', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const toast2 = { id: '2', title: 'Toast 2', open: true }
      const initialState = { toasts: [toast1, toast2] }

      const newState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: '1',
      })

      expect(newState.toasts[0].open).toBe(false)
      expect(newState.toasts[1].open).toBe(true)
    })
  })

  describe('REMOVE_TOAST', () => {
    it('should remove a specific toast when toastId is provided', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const toast2 = { id: '2', title: 'Toast 2', open: true }
      const initialState = { toasts: [toast1, toast2] }

      const newState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: '1',
      })

      expect(newState.toasts).toHaveLength(1)
      expect(newState.toasts[0].id).toBe('2')
    })

    it('should clear all toasts when toastId is undefined', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const toast2 = { id: '2', title: 'Toast 2', open: true }
      const initialState = { toasts: [toast1, toast2] }

      const newState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: undefined,
      })

      expect(newState.toasts).toHaveLength(0)
    })

    it('should not change toasts if toastId to remove does not exist', () => {
      const toast1 = { id: '1', title: 'Toast 1', open: true }
      const initialState = { toasts: [toast1] }

      const newState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: '999',
      })

      expect(newState.toasts).toHaveLength(1)
      expect(newState.toasts[0].id).toBe('1')
    })
  })
})
