import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface IUser {
    name: string,
    description: string
}
interface IData {
    [key: string]: IUser
}

const data: IData = {
    velopert: {
        name: "Tom",
        description: 'React'
    },
    gildong: {
        name: 'James',
        description: 'Vue'
    }
}
const Profile = () => {
    const [profile, setProfile] = useState<IUser | undefined>({
        name: '',
        description: '',
    });
    const { username } = useParams();

    useEffect(() => {
        if (typeof username === 'string' && data[username]) {
            setProfile(data[username]);
        } else {
            setProfile(undefined); // username이 없거나 잘못된 경우
        }
    }, [username]);

    if (!profile) {
        return <div>The user does not exist.</div>;
    }
    
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
};

export default Profile;