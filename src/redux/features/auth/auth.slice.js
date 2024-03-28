import { createSlice } from "@reduxjs/toolkit";
import { logout, userlogin } from "./auth.reducer";
const initialState = {
	auth: [],
	isLoading: false,
	isSuccess: false,
	isError: false,
	error: null
};
export const authSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		clearState: () => initialState,
		clearData: (state) => {
			state.auth = [];
		}
	},
	extraReducers: (builder) => {
		builder.addCase(userlogin.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(userlogin.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = true;
			state.auth = action.payload;
		});
		builder.addCase(userlogin.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
			state.error = action.error;
		});
		builder.addCase(logout.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = true;
			state.auth = action.payload;
		});
		builder.addCase(logout.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
			state.error = action.error;
		});
	}
});
export const { clearState, clearData } = authSlice.actions;
export default authSlice.reducer;
