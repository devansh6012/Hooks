import React, { createContext, useState } from "react";
import Component2 from "./Component2";

// Create a context
export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("John Doe");

  return (
    <div>
      <h1>App Component</h1>
      <UserContext.Provider value={{ user, setUser }}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default App;
