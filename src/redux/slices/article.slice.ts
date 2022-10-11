import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  id: string,
  recommendationsId: string[]
  flag: boolean
}

const initialState: FormState = {
  id: '',
  recommendationsId: [],
  flag: false
};

export const { actions: articleActions, reducer: articleReducer } = createSlice({
  name: "article",
  initialState,
  reducers: {
    addPosts(state: FormState, { payload }: any) {
      if (!payload) return state;
      state.id = payload;
    },
    addRecommend(state: FormState, { payload }: any) {
      if (!payload) return state;
      state.recommendationsId = payload.data.ids;
      state.flag = true;
    },
  },
});
