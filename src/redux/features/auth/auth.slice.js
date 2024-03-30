import { createSlice } from '@reduxjs/toolkit';
import { logout, userRegister, userlogin } from './auth.reducer';
const initialState = {
  auth: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: () => {
      initialState.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userlogin.pending, (state) => {
      console.log('userlogin.rejected', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(userlogin.fulfilled, (state, action) => {
      console.log('userlogin.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.auth = action.payload;
    });
    builder.addCase(userlogin.rejected, (state, action) => {
      console.log('userlogin.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
    builder.addCase(userRegister.pending, (state) => {
      console.log('userRegister.rejected', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      console.log('userRegister.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      console.log('userRegister.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
  },
});
export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
