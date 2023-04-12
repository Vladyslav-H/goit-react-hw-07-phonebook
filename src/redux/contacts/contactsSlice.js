import { createSlice } from '@reduxjs/toolkit';

import { getContacts, deleteContacts, postContacts } from './contactsOperations';

const setPending = state => {
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
    [getContacts.pending]: setPending,
    [getContacts.fulfilled]: setFulfilled,
    [getContacts.rejected]: setRejected,

    [postContacts.pending]: setPending,
    [postContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [postContacts.rejected]: setRejected,

    [deleteContacts.pending]: setPending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    [deleteContacts.rejected]: setRejected,
  },
});

export default contactsSlice.reducer;
