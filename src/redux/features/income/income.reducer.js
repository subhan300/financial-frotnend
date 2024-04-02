import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../../../utils/makeRequest';
export const getIncome = createAsyncThunk('income/getIncome', async (id, thunkAPI) => {
  try {
    let response = await makeRequest(`api/v1/income/get-income/${id}`, 'GET', '');
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
export const createIncome = createAsyncThunk('income/createIncome', async (data, thunkAPI) => {
  console.log(data, 'Data');
  try {
    let response = await makeRequest(`api/v1/income/add-income/`, 'POST', data);
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
