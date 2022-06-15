import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import userReducer from './userReducer'

const rootReducer = combineReducers({ userReducer});
export const Store = configureStore({ reducer: rootReducer })

export default Store;