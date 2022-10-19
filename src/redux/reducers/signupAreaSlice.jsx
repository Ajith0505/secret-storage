import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  inputs:{},
  signupResponse: "",
  loading: false,
  error: "",
  success: false,
}

const registerUsers = createAsyncThunk("user/signup",async(inputs)=>{
  return await axios.post("http://10.6.19.51:5000/user/signup",
  JSON.stringify(inputs),
  {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }
)
});

export const signupAreaSlice = createSlice({

  name: 'signup',
  initialState,

  reducers: {

    handleChangeInputs: (state, action) => {
      state.inputs = action.payload
    },

  },

  extraReducers: builder => {

    builder.addCase(registerUsers.pending, state => {
      state.loading= true
    })

    builder.addCase(registerUsers.fulfilled, (state,action) => {
      state.loading= false
      state.signupResponse = action.payload.data.data.message
      state.error = ""
      state.success = true
    })

    builder.addCase(registerUsers.rejected, (state,action) => {
      state.loading= false
      state.signupResponse = ""
      state.error = action.error.message
    })
    
  }

})

export const { handleSignupResponse, handleChangeInputs } = signupAreaSlice.actions
export default signupAreaSlice.reducer
export {registerUsers};
