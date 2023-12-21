import { createSlice } from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
  process: string;
  lang: any;
  currentRoute: string;
  selectedLocation: any;
  profile: any;
  tempMarriage: any;
}

const initialState: State = {
  user: null,
  authToken: null,
  process: '',
  lang: '',
  currentRoute: '',
  selectedLocation: '',
  profile: null,
  tempMarriage: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProcess: (state, action) => {
      state.process = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setTempMarriage: (state, action) => {
      state.tempMarriage = action.payload;
    },
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const {
  setProcess,
  setUser,
  setAuthToken,
  setLang,
  setCurrentRoute,
  setCurrentLocation,
  setUserProfile,
  setTempMarriage
} = userReducer.actions;

export default userReducer.reducer;
