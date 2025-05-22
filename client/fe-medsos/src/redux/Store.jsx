import { configureStore } from '@reduxjs/toolkit'
import persistedReducer from './RootReducer'

export const Store = configureStore({
    reducer: persistedReducer,
    devtools: import.meta.MODE === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})