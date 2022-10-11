import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  category: string,
  ids: any,
}

const initialState: FormState = {
  category: '',
  ids: {},
};

export const { actions: homeActions, reducer: homeReducer } = createSlice({
  name: "home",
  initialState,
  reducers: {
    addPosts(state: FormState, { payload }: any) {
      if (!payload) return state;
      const ids = Object.keys(payload.data);
      const cat = { [payload.category]: ids };
      state.ids = { ...state.ids, ...cat }
    }
  },
});