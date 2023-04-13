import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { GoogleLoginReducer } from './googleLoginReducer'
import ProductsReducer from '../actions/productsSlice'
import cartReducer from '../actions/cartSlice'

const rootReducer = combineReducers({
  googleLogin: GoogleLoginReducer,
  products: ProductsReducer,
  cart: cartReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
