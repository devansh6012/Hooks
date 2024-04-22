import React, { useContext } from "react";
import { UserContext } from "./App";

const Component3 = () => {
  // Consuming the user from context
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>Component 3</h3>
      <p>User: {user}</p>
    </div>
  );
};

export default Component3;
