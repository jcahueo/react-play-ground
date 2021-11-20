import React, { useState } from "react";
import "../App.css";

const ListKeys = ({ ListItem, title }) => {
  const [array, setArray] = useState(["Jorge", "Luis", "Pedro"]);

  const handleAddName = () => {
    const newArray = ["NewName", ...array];
    setArray(newArray);
  };

  return (
    <div className="Key-lists">
      <h1>{title}</h1>
      <div>
        <ListItem array={array} />
      </div>
      <button onClick={handleAddName}>Add Name</button>
    </div>
  );
};

export default ListKeys;
