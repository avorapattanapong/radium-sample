import {createSlice} from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    selectedUser: null,
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload
    },
    deselectUser: state => {
      state.selectedUser = null
    },
  }
});

export const {selectUser, deselectUser} = uiSlice.actions;
export default uiSlice.reducer;
