import React from "react";

type icecreamViewProps = {};

const icecreamView: React.FC<icecreamViewProps> = () => {
  return (
    <div>
      <h2>number of icecreams</h2> <br />
      <button>Oder icecream</button>
      {/* <br /> */}
      <button>Restock icecream</button>
      <br />
    </div>
  );
};
export default icecreamView;
