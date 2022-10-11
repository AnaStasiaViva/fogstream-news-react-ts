import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  loading: boolean
  hasMore: boolean,
  ids: string[]
}

const initialState: FormState = {
  loading: false,
  hasMore: false,
  ids: []
};

export const { actions: newsActions, reducer: newsReducer } = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNewsPosts(state: FormState, { payload }: any) {
      if (!payload) return state;
      const hasMore = payload.nextPage !== null;
      const newKeys = Object.keys(payload.data.data);
      const newIds = payload.nextPage === 2 ? newKeys : [...state.ids, ...newKeys];
      state.ids = newIds;
      state.hasMore = hasMore;
      state.loading = false;
    }
  },
});
