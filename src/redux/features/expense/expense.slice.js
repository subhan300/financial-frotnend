import { createSlice } from '@reduxjs/toolkit';
import { createExpense, deleteExpense, getExpense } from './expense.reducer';
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
      console.log(state, 'getExpense.pending');
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getExpense.fulfilled, (state, action) => {
      console.log(action, 'getExpense.fulfilled');
      const { data } = action?.payload;
      state.isLoading = false;
      state.isError = false;
      state.expenses = data;
    });
    builder.addCase(getExpense.rejected, (state, action) => {
      console.log(action, 'getExpense.rejected');
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
      state.expenses.unshift(action.payload.data);
    });
    builder.addCase(createExpense.rejected, (state, action) => {
      console.log('createExpense.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      console.log(action?.payload, 'deleteExpense.fulfilled');
      state.isLoading = false;
      state.isError = false;
      state.expenses = action?.payload;
    });
  },
});
export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
