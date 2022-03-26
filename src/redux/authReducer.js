import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const authentification = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, { payload }) => {
      console.log(payload);
      return state;
    },
    signout: () => {}
  }
});

// Action creators are generated for each case reducer function
export const { signin, signout } = authentification.actions;

export default authentification.reducer;
