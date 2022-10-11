import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {} as Record<string, any>
};

export const { actions: dbActions, reducer: dbReducer} = createSlice({
  name: 'db',
  initialState,
  reducers: {
    add(state, { payload }) {
      if (!payload) return state;
      state.data = {
        ...state.data,
        ...payload.data
      }
    },
  },
});
