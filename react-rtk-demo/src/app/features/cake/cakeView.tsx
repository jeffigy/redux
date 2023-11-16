import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
type cakeViewProps = {};

const cakeView: React.FC<cakeViewProps> = () => {
  const numOfCakes = useSelector((state: any) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes - {numOfCakes}</h2> <br />
      <button onClick={() => dispatch(ordered())}>Oder Cake</button>
      {/* <br /> */}
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
      <br />
    </div>
  );
};
export default cakeView;
