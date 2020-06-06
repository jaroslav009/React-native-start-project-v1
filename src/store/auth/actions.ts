import { AuthActions } from './types'
import { ErrorState, LoadingState } from 'store/types'

export const setAuthError = (payload: ErrorState): AuthActions => ({
  type: 'SET_AUTH_ERROR',
  payload,
})

export const resetAuthError = (): AuthActions => ({
  type: 'SET_AUTH_ERROR',
  payload: null,
})

export const setAuthLoading = (payload: LoadingState): AuthActions => ({
  type: 'SET_AUTH_LOADING',
  payload,
})
