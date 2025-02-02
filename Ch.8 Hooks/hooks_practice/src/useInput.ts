import { useReducer } from "react";

function reducer(state: any, action: any) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initForm: {name: string, nickname: string}) {
    const [state, dispatch] = useReducer(reducer, initForm);
    const onChange = (e: any) => {
        dispatch(e.target);
    }

    return [state, onChange];
}