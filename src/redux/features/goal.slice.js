import { createSlice } from '@reduxjs/toolkit';
import { createGoal, getGoal } from './goal.reducer';
const initialState = {
  goal: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: (state) => {
      return {
        ...state,
        isSuccess: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGoal.pending, (state) => {
      console.log('getGoal.pending', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getGoal.fulfilled, (state, action) => {
      console.log('getGoal.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.goal = action?.payload?.data;
    });
    builder.addCase(getGoal.rejected, (state, action) => {
      console.log('getGoal.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
    builder.addCase(createGoal.pending, (state) => {
      console.log('createGoal.pending', state);
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(createGoal.fulfilled, (state, action) => {
      console.log('createGoal.fulfilled', action);
      state.isLoading = false;
      state.isError = false;
      state.goal.unshift(action?.payload?.data);
    });
    builder.addCase(createGoal.rejected, (state, action) => {
      console.log('createGoal.rejected', action);
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.error;
    });
  },
});
export const { clearState, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
