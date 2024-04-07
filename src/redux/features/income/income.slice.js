import { createSlice } from '@reduxjs/toolkit';
import { createIncome, deleteIncome, editIncome, getIncome } from './income.reducer';
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
      console.log('getIncome.pending', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getIncome.fulfilled, (state, action) => {
      console.log('getIncome.fulfilled', action);
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
    builder.addCase(createIncome.pending, (state) => {
      console.log('createIncome.pending', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(createIncome.fulfilled, (state, action) => {
      console.log('createIncome.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
      state.incomes.unshift(action?.payload?.data);
    });
    builder.addCase(createIncome.rejected, (state, action) => {
      console.log('createIncome.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
    builder.addCase(editIncome.pending, (state) => {
      console.log('editIncome.pending', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(editIncome.fulfilled, (state, action) => {
      const updatedIncome = action.payload.data;
      console.log('editIncome.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      const index = state.incomes.findIndex((item) => item?._id === action.meta.arg);
      if (index != -1) {
        state.incomes[index] = updatedIncome;
      }
    });
    builder.addCase(editIncome.rejected, (state, action) => {
      console.log('editIncome.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
    builder.addCase(deleteIncome.fulfilled, (state, action) => {
      console.log('deleteIncome.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
      state.incomes.filter((item) => item._id != action.payload._id);
    });
  },
});
export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
