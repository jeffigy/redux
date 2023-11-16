import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   ordered as cakeOrdered,
//   restocked as cakeRestocked,
// } from "../cake/cakeSlice";
type initialStateType = {
  numOfIcecreams: number;
};
const initialState: initialStateType = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, actions: PayloadAction<number>) => {
      state.numOfIcecreams += actions.payload;
    },
  },
  //! deprecated
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecreams--;
  //   },
  // },
  //* new
  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numOfIcecreams--;
  //   });
  // },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
