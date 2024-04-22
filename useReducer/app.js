import React, { useReducer } from 'react';

// Reducer function
// A reducer is a pure function that takes the previous state and an action, and returns the next state. It's the place where you put your state logic. It accepts two arguments: the current state and an action, and returns the new state.
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const Component = () => {
    // Initial state

    // Just like useState, useReducer returns a state and a dispatch method to update the state. But useReducer accepts a reducer of type (state, action) => newState, and initializes the state with an initial value.



    const initialState = { count: 0 };

    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // To update the state, you dispatch an action. An action is a plain JavaScript object with a type field, which represents the type of action being performed. You can also include additional data in the action object if necessary.


    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default Component;
