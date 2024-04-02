import { createSlice } from '@reduxjs/toolkit';
import { createExpense, getExpense } from './expense.reducer';
const initialState = {
  expenses: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: () => {
      initialState.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExpense.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getExpense.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.isLoading = false;
      state.isError = false;
      state.expenses = data;
    });
    builder.addCase(getExpense.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
    builder.addCase(createExpense.pending, (state) => {
      console.log('createExpense.pending', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(createExpense.fulfilled, (state, action) => {
      console.log(action?.payload, 'createExpense.fulfilled');
      state.isLoading = false;
      state.isError = false;
      state.expenses.unshift(action.payload);
    });
    builder.addCase(createExpense.rejected, (state, action) => {
      console.log('createExpense.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
  },
});
export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
