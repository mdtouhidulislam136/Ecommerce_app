import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type {} from 'redux-thunk/extend-redux'
import axios from 'axios'

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

type ProductState = {
  products: Product[]
  status: 'idle' | 'loading' | 'Succeeded' | 'failed'
  error: string | null
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get('http://localhost:5000/data/products.json')
  return response.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'Succeeded'
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Something went wrong'
      })
  }
})

export default productsSlice.reducer
