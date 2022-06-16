import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import thunk from 'redux-thunk'
import userReducer from './userReducer'
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, userReducer)
  const rootReducer = combineReducers({ persistedReducer});
export const Store = configureStore({ reducer: rootReducer })
export let persistor = persistStore(Store)
export default Store;