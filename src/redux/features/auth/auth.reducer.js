import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../../../utils/makeRequest';
export const userlogin = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    let response = await makeRequest(`/api/v1/users/login/`, 'POST', data);
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
export const logout = createAsyncThunk('/auth/logout', async (data, thunkAPI) => {
  try {
    let response = await makeRequest(`/api/v1/users/logout`, 'POST', {}, null);
    if (response) {
      console.log(response, 'RESOPONSE============>');
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});