import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { userLogin } from "../../api/useraction";

import { fetchAdcategory } from "../../api/useraction";

import { fetchProfileDetail } from "../../api/useraction";

import { resetPasswordAction } from "../../api/useraction";
import { editProfile } from "../../api/useraction";
// initialize userToken from local storage

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
  isloggedin: false,
  adCategory: [],
  isIconClicked: false,
  isDrawerOPen: false,
  isEditDrawerOPen: false,
  userProfile: [],
  editProfiles: null,
  isPwdDrawerOpen: false,
  isResetPwdDone: null,
  adsLists:[]

}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {

    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.success = true
      state.isloggedin = true
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload

    },

  },
})

const fetchAdCategorySlice = createSlice({
  name: 'fetchAd',
  initialState,
  reducers: {},
  extraReducers: {

    [fetchAdcategory.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchAdcategory.fulfilled]: (state, { payload }) => {
      console.log("this is the payload", payload);
      state.loading = false
      state.adCategory = payload.data
    },
    [fetchAdcategory.rejected]: (state, { payload }) => {

      state.loading = false
      state.error = payload

    },

  },
})

const profileSlice = createSlice({

  name: 'userprofile',
  initialState,

  reducers: {

    handleProfileModal: (state, action) => {
      state.isIconClicked = action.payload
    },
    handleProfilesideDrawer: (state, action) => {
      state.isDrawerOPen = action.payload

      state.isIconClicked = false

    },

    handleEditsideDrawer: (state, action) => {
      state.isEditDrawerOPen = action.payload
      state.isDrawerOPen = false
      state.isIconClicked = false
    },
    handleResetPwdsideDrawer: (state, action) => {
      state.isPwdDrawerOpen = action.payload
      state.isDrawerOPen = false
      state.isIconClicked = false

    },

  },
})

const profileApiSlice = createSlice({
  name: 'profileapi',
  initialState,
  reducers: {},
  extraReducers: {

    [fetchProfileDetail.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchProfileDetail.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userProfile = payload.data.profile

    },
    [fetchProfileDetail.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload

    },


  },
})

const editProfileSlice = createSlice({
  name: 'editprofile',
  initialState,
  reducers: {
    clearStateEditProfile: (state, action) => {
      state.success = false
      state.editProfiles = null
      state.error = null
    },
  },
  extraReducers: {

    [editProfile.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [editProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.editProfiles = payload.data.message
      console.log("this is to inform that after edting there is a message", payload);

    },
    [editProfile.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload.data.message
      console.log("this is to inform that after edting there is a error message", payload);
    },
  },
})


const resetPasswordSlice = createSlice({
  name: 'resetpassword',
  initialState,
  reducers: {
    clearStateResetPwd: (state, action) => {
      state.success = false
      state.isResetPwdDone = null
      state.error = null
    },
  },
  extraReducers: {

    [resetPasswordAction.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [resetPasswordAction.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.isResetPwdDone = payload.data.message
    },
    [resetPasswordAction.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload.error.message


    },

  },
})

const adListSlice = createSlice({
  name: 'adlist',
  initialState,
  reducers: {
    // clearStateResetPwd: (state, action) => {
    //   state.success = false
    //   state.isResetPwdDone = null
    //   state.error = null
    // },
  },
  extraReducers: {

    [resetPasswordAction.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [resetPasswordAction.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.isResetPwdDone = payload.data.message
    },
    [resetPasswordAction.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload.error.message


    },

  },
})








const reducerWhole = combineReducers({
  login: userSlice.reducer,
  adcategory: fetchAdCategorySlice.reducer,
  userprofile: profileSlice.reducer,
  profileapi: profileApiSlice.reducer,
  editprofile: editProfileSlice.reducer,
  resetpassword: resetPasswordSlice.reducer,
})

export default reducerWhole;


export const { handleProfileModal, handleProfilesideDrawer, handleEditsideDrawer, handleResetPwdsideDrawer } = profileSlice.actions
export const { clearStateResetPwd } = resetPasswordSlice.actions
export const { clearStateEditProfile } = editProfileSlice.actions
