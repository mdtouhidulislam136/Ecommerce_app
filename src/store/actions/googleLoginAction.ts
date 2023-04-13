import { createAction } from '@reduxjs/toolkit'

export const GoogleLoginSuccess = createAction<{ token: string }>('GOOGLE_LOGIN')
export const GoogleLogout = createAction('GOOGLE_LOGOUT')
