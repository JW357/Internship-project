import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '', surname: '', email: '', message: '',
    },
  },
  reducers: {
    // eslint-disable-next-line no-param-reassign
    submit: (state, action) => { state.user = action.payload; },
  },
});

export const { submit } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
