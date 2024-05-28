import React, {useState, useReducer} from 'react';

function reducer(state, action) {
    switch(action.type) {
        case "INCREMENT":
            return { value: state.value + 1 }
        case "DECREMENT":
            return { value: state.value - 1 }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    // const [value, setValue] = useState(0);
    return (
        <>
            <p>
                {/* Current Count: <b>{value}</b> */}
                Current Count: <b>{state.value}</b>
            </p>
            {/* <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button> */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </>
    );
};

export default Counter;