import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  search:"",
};

const stateSlice = createSlice({
  name: "stateManagement",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setData,setSearch } = stateSlice.actions;
export default stateSlice.reducer;
