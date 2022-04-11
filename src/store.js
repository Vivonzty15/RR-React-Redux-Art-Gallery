import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import { logger } from './features/Middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})