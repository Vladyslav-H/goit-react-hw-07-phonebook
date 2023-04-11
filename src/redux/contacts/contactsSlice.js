import { createSlice } from '@reduxjs/toolkit';

import { getContacts, deleteContacts, postContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const setFulfilled = (state, action) => {
  state.isLoading = false;
  state.contacts = action.payload;
};
const setRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled]: setFulfilled,
    [getContacts.rejected]: setRejected,

    [postContacts.pending]: handlePending,
    [postContacts.fulfilled]: setFulfilled,
    [postContacts.rejected]: setRejected,

    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state) {
      state.isLoading = false;
    },
    [deleteContacts.rejected]: setRejected,
  },
});

export default contactsSlice.reducer;
