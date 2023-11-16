import React from "react";
import { useSelector } from "react-redux";

type cakeViewProps = {};

const cakeView: React.FC<cakeViewProps> = () => {
  const numOfCakes = useSelector((state: any) => state.cake.numOfCakes);
  return (
    <div>
      <h2>number of cakes - {numOfCakes}</h2> <br />
      <button>Oder Cake</button>
      {/* <br /> */}
      <button>Restock Cake</button>
      <br />
    </div>
  );
};
export default cakeView;
