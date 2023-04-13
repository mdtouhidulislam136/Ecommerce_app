import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'


export interface Variant {
  color: string
  price: number
  image: string
  sizes: string[]
}

export interface Product {
  id: string
  name: string
  description: string
  categories: string[]
  variants: Variant[]
}

type CartState = {
  cartItems: Product[]
  cartTotalAmount: number
  cartQuantity: number
}

const initialState: CartState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') || '[]')
    : [],
  cartTotalAmount: 0,
  cartQuantity: 1
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartQuantity += 1
        toast.info(` Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: 'bottom-left'
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, {
          position: 'bottom-left'
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

      // state.cartQuantity += 1
      // toast.success(`${action.payload.name} added to cart`, {
      //   position: 'bottom-left'
      // })
      // state.cartItems.push(action.payload)
      // state.cartTotalAmount += action.payload.price * action.payload.cartQuantity
      // localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    //remove product from cart

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      state.cartItems = nextCartItems
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

      toast.error(`${action.payload.name} removed from cart`, {
        position: 'bottom-left'
      })
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
