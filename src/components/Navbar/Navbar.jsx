import React, { useState } from "react";

const Navbar = ({ cars }) => {
  // console.log(cars);
  const [activeCar, setActiveCar] = useState("");

  return (
    <div>
      {cars.map(item => (
        <strong
          onClick={() => setActiveCar(item.id)}
          style={{
            margin: "10px",
            color: activeCar === item.id ? "black" : "white",
          }}
          key={item.id}>
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
