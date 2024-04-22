import React, { useRef } from "react";

export const userContext = createContext();

const App = () => {

  const inputRef = useRef(null);

    const handleButtonClick = () => {
        console.log(inputRef);
        inputRef.current.focus(); // Modifying the ref doesn't cause a re-render
        inputRef.current.placeholder = "Submitted";
        inputRef.current.value = "";
    };

  return (
    <>
      <div>
            <input ref={inputRef} />
            <button onClick={handleButtonClick} >Focus Input</button>
        </div>
    </>
  )
}

export default App