const redux = require("redux");
const createStore = redux.legacy_createStore;

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

//* Store
// controls how state transitions happen
const store = createStore(reducer);

// logs the initial state
console.log("Initial state", store.getState());

// store listener; any time the state changes, this function will be called
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// dispatch an action -> reducer matches the action 'type' which is
// "CAKE_ORDERED" and returns the new state
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
