import React from "react";
import { v4 as uuidv4 } from "uuid";

const IdAsKey = ({ array }) => {
  const listOfItems = array.map((item, index) => {
    const id = uuidv4();
    return (
      <div key={id}>
        {item}
        <input />
      </div>
    );
  });

  return <>{listOfItems}</>;
};

export default IdAsKey;
