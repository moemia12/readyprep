import { combineReducers } from '@reduxjs/toolkit'

import tabReducer from './tabReducer'

const rootReducer = combineReducers({
 tab: tabReducer,
});

export default rootReducer