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
