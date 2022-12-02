import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  loading: boolean
  hasMore: boolean,
  query: string
  ids: string[]
}

const initialState: FormState = {
  loading: false,
  hasMore: false,
  query: '',
  ids: []
};

export const { actions: searchActions, reducer: searchReducer } = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchPosts(state: FormState, { payload }: any) {
      if (!payload) return state;
      const hasMore = payload.nextPage !== null;
      const newKeys = Object.keys(payload.data.data);
      const newIds = payload.nextPage === 2 ? newKeys : [...state.ids, ...newKeys];
      state.ids = newIds;
      state.hasMore = hasMore;
      state.loading = false;
    },
    clearSearch(state: FormState) {
      state.ids = [];
      state.hasMore = false;
      state.loading = false;
    }
  },
});
