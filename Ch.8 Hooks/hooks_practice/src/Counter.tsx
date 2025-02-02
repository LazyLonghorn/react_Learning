import React, { useReducer } from 'react';

function reducer(state: any, action: any) {
    // action type 에 따라 작업 수행
    switch(action.type) {
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <>
            <p>Now Count: <b>{state.value}</b></p>
            <button onClick={() => {dispatch({ type: 'INCREMENT' })}}>INCREMENT</button>
            <button onClick={() => {dispatch({ type: 'DECREMENT' })}}>DECREMENT</button>
        </>
    );
};

export default Counter;