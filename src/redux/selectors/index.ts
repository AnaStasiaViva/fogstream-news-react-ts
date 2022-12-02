import { createSelector } from '@reduxjs/toolkit';

export const selectDBState = (state: any) => state.dbReducer;
export const selectIDSState = (state: any) => state.homeReducer;

export const selectState = createSelector(
  [selectDBState, selectIDSState],
  (list, ids) => {
    return {
      list: list.data,
      ids: ids.ids
    }
  }
)