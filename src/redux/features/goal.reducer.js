import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../../utils/makeRequest';

export const createGoal = createAsyncThunk('goal/createGoal', async (data, thunkAPI) => {
  console.log(data, 'data');
  try {
    let response = await makeRequest(`api/v1/goal/add-goal/`, 'POST', data);
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
export const getGoal = createAsyncThunk('goal/getGoal', async (userId, thunkAPI) => {
  try {
    let response = await makeRequest(`api/v1/goal/add-goal/${userId}`, 'GET', {});
    if (response) {
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
