import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { reducer } from './use-toast'

describe('toast reducer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('ADD_TOAST', () => {
    it('should add a toast to empty state', () => {
      const initialState = { toasts: [] }
      const toast = { id: '1', title: 'Test Toast', open: true }

      const nextState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast,
      })

      expect(nextState.toasts).toEqual([toast])
    })

    it('should enforce TOAST_LIMIT by keeping only the latest toast(s)', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Old Toast', open: true }],
      }
      const newToast = { id: '2', title: 'New Toast', open: true }

      const nextState = reducer(initialState, {
        type: 'ADD_TOAST',
        toast: newToast,
      })

      expect(nextState.toasts).toEqual([newToast])
      expect(nextState.toasts).toHaveLength(1)
    })
  })

  describe('UPDATE_TOAST', () => {
    it('should update an existing toast matching the id', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Original Title', description: 'Original Description' },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '1', title: 'Updated Title' },
      })

      expect(nextState.toasts).toEqual([
        { id: '1', title: 'Updated Title', description: 'Original Description' },
      ])
    })

    it('should leave non-matching toasts unchanged', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Toast 1' }],
      }

      const nextState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '2', title: 'Updated Title' },
      })

      expect(nextState.toasts).toEqual([{ id: '1', title: 'Toast 1' }])
    })
  })

  describe('DISMISS_TOAST', () => {
    it('should dismiss a specific toast by setting open to false', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Toast 1', open: true },
          { id: '2', title: 'Toast 2', open: true },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: '1',
      })

      expect(nextState.toasts).toEqual([
        { id: '1', title: 'Toast 1', open: false },
        { id: '2', title: 'Toast 2', open: true },
      ])
    })

    it('should dismiss all toasts when toastId is undefined', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Toast 1', open: true },
          { id: '2', title: 'Toast 2', open: true },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: undefined,
      })

      expect(nextState.toasts).toEqual([
        { id: '1', title: 'Toast 1', open: false },
        { id: '2', title: 'Toast 2', open: false },
      ])
    })
  })

  describe('REMOVE_TOAST', () => {
    it('should remove a specific toast by toastId', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Toast 1' },
          { id: '2', title: 'Toast 2' },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: '1',
      })

      expect(nextState.toasts).toEqual([{ id: '2', title: 'Toast 2' }])
    })

    it('should remove all toasts when toastId is undefined', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Toast 1' },
          { id: '2', title: 'Toast 2' },
        ],
      }

      const nextState = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: undefined,
      })

      expect(nextState.toasts).toEqual([])
    })
  })
})
