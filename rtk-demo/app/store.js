const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");

//* Store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;
