import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isFilecoin: false,
  },
  reducers: {
    changeProtocolStatus(state, action) {
      state.isFilecoin = action.payload;
    }
  },
});

export const { changeProtocolStatus} = appSlice.actions;
export default appSlice.reducer;
