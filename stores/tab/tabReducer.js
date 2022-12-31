import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedTab: 'Home'
}

export const tabSlice = createSlice({
  name: 'switchTabs',
  initialState: initialState,
  reducers: {
    switchTabs: (state, action) => ({
      ...state,
      selectedTab: action.payload,
    })
  },
});

export const { switchTabs } = tabSlice.actions

export default tabSlice.reducer

