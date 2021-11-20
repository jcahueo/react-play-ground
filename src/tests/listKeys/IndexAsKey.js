import React from "react";

const IndexAsKey = ({ array }) => {
  const listOfItems = array.map((item, index) => {
    return (
      <div key={index}>
        {item}
        <input />
      </div>
    );
  });

  return <>{listOfItems}</>;
};

export default IndexAsKey;
