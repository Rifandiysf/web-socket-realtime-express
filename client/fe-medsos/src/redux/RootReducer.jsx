import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import authReducer from './reducer/AuthReducer'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const root = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, root)

export default persistedReducer