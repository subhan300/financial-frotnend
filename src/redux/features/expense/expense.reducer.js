import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../../../utils/makeRequest';
export const getExpense = createAsyncThunk('expense/getExpense', async (id, thunkAPI) => {
  try {
    let response = await makeRequest(`api/v1/expense/get-expense/${id}`, 'GET', '');
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
