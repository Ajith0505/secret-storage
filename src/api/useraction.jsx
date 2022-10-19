import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { instance } from "./axios"



 


export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //      "Access-Control-Allow-Origin": "*"
        //   },
        // }
       
        const response  = await instance.post(
          "user/login" ,
  
          { username, password },
        )
        const result = await response.data
        
        return result;
      } catch (error) {
        
        // return custom error message from API if any
        if (error.response && error.response.data) {
  
          return rejectWithValue(error.response.data)
        } else {

          return rejectWithValue(error.response)
        }
      }
    }
  )



  export const fetchAdcategory = createAsyncThunk(
    'user/fetchAd',
    async (arg, { getState, rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const { fetchAd } = getState()
        // const config = {
        //   headers: {
        //      "Access-Control-Allow-Origin": "*"
        //   },
        // }
       
        const response  = await instance.get(
          'ad/category'
        )
        const result = await response.data
        
        return result;
      } catch (error) {
        
        // return custom error message from API if any
        if (error.response && error.response.data) {
  
          return rejectWithValue(error.response.data)
        } else {

          return rejectWithValue(error.response)
        }
      }
    }
  )

  export const fetchProfileDetail = createAsyncThunk(
    'user/fetchProfile',
    async (arg, { getState, rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const { fetchProfile } = getState()
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     "Access-Control-Allow-Origin": "*",
        //     "Authorization":`Bearer ${localStorage.getItem("userToken")}`

        //   },
        // }
       
        const response  = await instance.get(
          'user/profile',
        
        )
        const result = await response.data
        
        return result;
      } catch (error) {
        
        // return custom error message from API if any
        if (error.response && error.response.data) {
  
          return rejectWithValue(error.response.data)
        } else {

          return rejectWithValue(error.response)
        }
      }
    }
  )


  export const editProfile = createAsyncThunk(
    'user/editprofile',
    async ({ name, email, number, address, pic  }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        // const config = {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //      "Access-Control-Allow-Origin": "*",
        //      "Authorization":`Bearer ${localStorage.getItem("userToken")}`
        //   },
        // }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('contact_number',number);
        formData.append('address',address);
        if (pic){
          formData.append('pic',pic)
        }
        
       
        const response  = await instance.put(
          'user/profile',
          formData,
        )
        const result = await response.data
        
        return result;
      } catch (error) {
        
        // return custom error message from API if any
        if (error.response && error.response.data) {
  
          return rejectWithValue(error.response.data)
        } else {

          return rejectWithValue(error.response)
        }
      }
    }
  )



export const resetPasswordAction = createAsyncThunk(
  'user/resetpassword',
  async ({ passwordcurrent, passwordconfirm }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //      "Access-Control-Allow-Origin": "*",
      //      "Authorization":`Bearer ${localStorage.getItem("userToken")}`
      //   },
      // }
     
      const response  = await instance.put(
        'user/resetpassword',
        { current_password: passwordcurrent, new_password: passwordconfirm },
      )
      const result = await response.data
      
      return result;
    } catch (error) {
      
      // return custom error message from API if any
      if (error.response && error.response.data) {

        return rejectWithValue(error.response.data)
      } else {

        return rejectWithValue(error.response)
      }
    }
  }
)



export const adListAction = createAsyncThunk(
  'user/adlists',
  async (data, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      var obj={};
      obj.cat=data.id;
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //      "Access-Control-Allow-Origin": "*",
      //      "Authorization":`Bearer ${localStorage.getItem("userToken")}`
      //   },
      // }
     
      const response  = await axios.get(
        'ad/ads/v2',
        { params:obj },
      )
      const result = await response.data
      
      return result;
    } catch (error) {
      
      // return custom error message from API if any
      if (error.response && error.response.data) {

        return rejectWithValue(error.response.data)
      } else {

        return rejectWithValue(error.response)
      }
    }
  }
)
