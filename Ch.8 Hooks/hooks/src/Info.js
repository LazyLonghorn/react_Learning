import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log("Mount or Update");
        console.log("U Name : " + name);
        return () => { 
            console.log('Clean up'); 
            console.log("Clean Name : " + name);
        };
    }, [name]);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeNickname = (e) => setNickname(e.target.value);

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
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