import React from "react";

type cakeViewProps = {};

const cakeView: React.FC<cakeViewProps> = () => {
  return (
    <div>
      <h2>number of cakes</h2> <br />
      <button>Oder Cake</button>
      <br />
      <button>Restock Cake</button>
      <br />
    </div>
  );
};
export default cakeView;
