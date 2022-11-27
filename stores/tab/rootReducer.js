import {combineReducers } from '@reduxjs/toolkit'
import tabReducer from './tabReducer'

export default combineReducers({
    reducer: {
        tab: tabReducer,
    }
})