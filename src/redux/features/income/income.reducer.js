import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../../../utils/makeRequest';
export const getIncome = createAsyncThunk('income/getIncome', async (id, thunkAPI) => {
  try {
    console.log(id, 'id===========');
    let response = await makeRequest(`api/v1/income/get-income/${id}`, 'GET', '');
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
