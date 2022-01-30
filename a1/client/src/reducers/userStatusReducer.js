import { createSlice } from '@reduxjs/toolkit'

export const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userStatusSlice.actions;

export default userStatusSlice.reducer;