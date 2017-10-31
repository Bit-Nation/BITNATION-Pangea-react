import { AUTH_DIALOG_CLOSE, AUTH_DIALOG_OPEN } from '../constants/events';

export function openAuthDialog() {
  return {
    type: AUTH_DIALOG_OPEN,
  } 
}

export function closeAuthDialog() {
  return {
    type: AUTH_DIALOG_CLOSE,
  }
}