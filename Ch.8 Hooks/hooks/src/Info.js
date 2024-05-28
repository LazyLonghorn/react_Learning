import React, {useState, useEffect, useReducer} from 'react';
import useInput from './useInput';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, onChange] = useInput({name: '', nickname: ''});
    const {name, nickname} = state;
    // const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''});
    // const {name, nickname} = state;

    // const onChange = (e) => {
    //     dispatch(e.target);
    // }

    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // useEffect(() => {
    //     console.log("Mount or Update");
    //     console.log("U Name : " + name);
    //     return () => { 
    //         console.log('Clean up'); 
    //         console.log("Clean Name : " + name);
    //     };
    // }, [name]);

    // const onChangeName = (e) => setName(e.target.value);
    // const onChangeNickname = (e) => setNickname(e.target.value);

    return (
        <>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>Name: </b> {name}
                </div>
                <div>
                    <b>NickName: </b> {nickname}
                </div>
            </div>
        </>
    );
};

export default Info;