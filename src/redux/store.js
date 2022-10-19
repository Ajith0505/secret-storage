import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './reducers/signupAreaSlice'
import reducerWhole from "../redux/reducers/users"

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    reducers: reducerWhole,

  },
})
