import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    cardModal: false,
    formModal: false,
    zoomModal: false,
    modalData: {},
  },
  reducers: {
    openModal: (state, action) => {
      const modalName = action.payload;
      state[modalName] = true;
    },

    closeModal: (state, action) => {
      const modalName = action.payload;
      state[modalName] = false;
    },

    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const { openModal, closeModal, setModalData } = modalSlice.actions;

export default modalSlice.reducer;
