import {
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_SUCCESS
} from '../actions/categories/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        GET_CATEGORIES_SUCCESS: (state, action) => {
            state.categories = action.payload
        },
        GET_CATEGORIES_FAIL: (state, action) => {
            state.categories = null
        }
    }
})

export const { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } = categoriesSlice.actions

export default categoriesSlice.reducer