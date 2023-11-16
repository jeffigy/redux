import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
type icecreamViewProps = {};

const icecreamView: React.FC<icecreamViewProps> = () => {
  const numOfIcecreams = useSelector(
    (state: any) => state.icecream.numOfIcecreams
  );
  const dispatch = useDispatch();
  const [value, setvalue] = useState(1);
  return (
    <div>
      <h2>number of icecreams - {numOfIcecreams}</h2> <br />
      <button onClick={() => dispatch(ordered())}>Oder icecream</button>
      {/* <br /> */}
      <input
        type="number"
        value={value}
        onChange={(e) => setvalue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecream
      </button>
      <br />
    </div>
  );
};
export default icecreamView;
