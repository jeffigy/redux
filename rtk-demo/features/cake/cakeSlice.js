const createSlice = require("@reduxjs/toolkit").createSlice;

// initial state
const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  //* actions
  name: "cake",
  initialState,
  //* reducers
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
