import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Anonymos',
  token: '',
  id: ''
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUser: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
