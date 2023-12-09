import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './features/orderSlice'

export const store = configureStore({
    reducer: {
        //key:reducer
        bc: orderReducer,
        


    }
})