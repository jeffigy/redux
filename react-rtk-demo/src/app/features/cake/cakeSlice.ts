import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  numOfCakes: number;
};

const initialState: initialStateType = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state: { numOfCakes: number }) => {
      state.numOfCakes--;
    },
    restocked: (
      state: { numOfCakes: number },
      action: PayloadAction<number>
    ) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
