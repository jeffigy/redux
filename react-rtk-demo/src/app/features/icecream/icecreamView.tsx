import React from "react";
import { useSelector } from "react-redux";

type icecreamViewProps = {};

const icecreamView: React.FC<icecreamViewProps> = () => {
  const numOfIcecreams = useSelector(
    (state: any) => state.icecream.numOfIcecreams
  );
  return (
    <div>
      <h2>number of icecreams - {numOfIcecreams}</h2> <br />
      <button>Oder icecream</button>
      {/* <br /> */}
      <button>Restock icecream</button>
      <br />
    </div>
  );
};
export default icecreamView;
