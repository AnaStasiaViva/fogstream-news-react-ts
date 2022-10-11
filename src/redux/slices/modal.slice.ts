import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  isOpen: boolean
}

const initialState: FormState = {
  isOpen: false
};

export const { actions: modalActions, reducer: modalReducer } = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state: FormState) {
      state.isOpen = !state.isOpen;
    }
  },
});
