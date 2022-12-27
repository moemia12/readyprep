import { combineReducers } from '@reduxjs/toolkit'

import tabReducer from './tabReducer'

const rootReducer = combineReducers({
 tabReducer,
});

export default rootReducer