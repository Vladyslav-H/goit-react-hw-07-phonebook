import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    add(state, { payload }) {
      state = payload;

      return state;
    },
  },
});

export const { add } = filterSlice.actions;
export default filterSlice.reducer;
