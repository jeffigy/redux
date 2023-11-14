const redux = require("redux");
const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

//* Action
// type of action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// action creator
// it is a function that returns an object
function orderCake() {
  // action is an object with a type property
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

//* Reducer
// (previousState, action) => newState
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };
const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    //* single reducer approach works, but difficult maintain in the long run
    // case ICECREAM_ORDERED:
    //   return {
    //     ...state,
    //     numOfIcecreams: state.numOfIcecreams - 1,
    //   };
    // case ICECREAM_RESTOCKED:
    //   return {
    //     ...state,
    //     numOfIcecreams: state.numOfIcecreams + action.payload,
    //   };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

//* combine Reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

//* Store
// controls how state transitions happen
const store = createStore(rootReducer);

// logs the initial state
console.log("Initial state", store.getState());

// store listener; any time the state changes, this function will be called
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// dispatch an action -> reducer matches the action 'type' which is
// "CAKE_ORDERED" and returns the new state
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

// bindActionCreators is a helper function that binds action creators
// but it is not necessary to use it
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);

unsubscribe();
