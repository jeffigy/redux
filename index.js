//* Action
// type of action
const CAKE_ORDERED = "CAKE_ORDERED";

// action creator
// it is a function that returns an object
function orderCake() {
  // action is an object with a type property
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

//* Reducer
// (previousState, action) => newState
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
