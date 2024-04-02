import { createSlice } from '@reduxjs/toolkit';
import { getIncome } from './income.reducer';
const initialState = {
  incomes: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: () => {
      initialState.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIncome.pending, (state) => {
      console.log('getIncome.rejected', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getIncome.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.isLoading = false;
      state.isError = false;
      state.incomes = data;
    });
    builder.addCase(getIncome.rejected, (state, action) => {
      console.log('getIncome.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
  },
});
export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
