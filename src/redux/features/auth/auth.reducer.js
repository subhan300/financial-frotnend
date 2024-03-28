import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../../utils/makeRequest";
export const userlogin = createAsyncThunk(
	"auth/userlogin",
	async (data, thunkAPI) => {
		try {
			let response = await makeRequest(`/rest-auth/login/`, "POST", data, null);
			if (response) {
				return response;
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response);
		}
	}
);
export const logout = createAsyncThunk(
	"auth/logout",
	async (data, thunkAPI) => {
		try {
			let response = await makeRequest(`/rest-auth/logout/`, "POST", {}, null);
			if (response) {
				console.log(response, "RESOPONSE============>");
				return response;
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response);
		}
	}
);
