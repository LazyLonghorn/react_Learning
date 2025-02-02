// // Custom Hook Not use
// import React, { useEffect, useReducer, useState } from 'react';

// function reducer(state: any, action: any) {
//     debugger
//     let changeValue = {
//         ...state,
//         [action.name]: action.value
//     };

//     return changeValue;
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''});
//     const {name, nickname} = state;

//     const onChange = (e: any) => {
//         dispatch(e.target);
//     }

//     return (
//         <>
//             <input name='name' value={name} onChange={onChange}/>
//             <input name='nickname' value={nickname} onChange={onChange}/>

//             <div>
//                 <div>
//                     <b>Name : </b>{name}
//                 </div>
//                 <div>
//                     <b>Nickname : </b>{nickname}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Info;

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickName] = useState('');

//     useEffect(() => {
//         console.log("U Name : " + name);
//         return () => { 
//             console.log('Clean up'); 
//             console.log("Clean Name : " + name);
//         };
//     }, []);

//     const onChangeName = (e: any) => {
//         setName(e.target.value);
//     }
//     const onChangeNickName = (e: any) => {
//         setNickName(e.target.value);
//     }

//     return (
//         <>
//             <input value={name} onChange={onChangeName}/>
//             <input value={nickname} onChange={onChangeNickName}/>

//             <div>
//                 <div>
//                     <b>Name : </b>{name}
//                 </div>
//                 <div>
//                     <b>Nickname : </b>{nickname}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Info;


// Custom Hook Use
import React, { useEffect, useReducer, useState } from 'react';
import useInputs from './useInput';


const Info = () => {
    const [state, onChange] = useInputs({name: '', nickname: ''});
    const {name, nickname} = state;

    return (
        <>
            <input name='name' value={name} onChange={onChange}/>
            <input name='nickname' value={nickname} onChange={onChange}/>

            <div>
                <div>
                    <b>Name : </b>{name}
                </div>
                <div>
                    <b>Nickname : </b>{nickname}
                </div>
            </div>
        </>
    );
};

export default Info;