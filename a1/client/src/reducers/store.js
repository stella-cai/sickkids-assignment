import { configureStore } from '@reduxjs/toolkit'
import userStatusReducer from './userStatusReducer'

export default configureStore({
  reducer: {
    userStatus: userStatusReducer,
  },
})