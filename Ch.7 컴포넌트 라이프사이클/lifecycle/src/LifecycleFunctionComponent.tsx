import React, { useEffect, useState } from 'react';

const LifecycleFunctionComponent: React.FC = (props: any) => {
    /**
     * 컴포넌트 호출 시 가장 먼저 호출이 되는 공간
     * 컴포넌트에서 사용 될 state나 함수들을 정의 하는 공간입니다.
     */
    console.log("Initialize");

    const [isShowTempComp, setIsSHowTempComp] = useState<boolean>(true);
    const [userInfo, setUserInfo] = useState<any>({
        userId: 'adjh54',
        userAge: 50,
        isShowTempComponent: false,
    });

    useEffect(() => {
        console.log("Component Did Mount");
    }, []);

    /**
     * 컴포넌트 내에서 변화가 발생하였을 경우에 실행되는 메서드이다.
     * 전달 받은 props의 값에 변화가 생겼을 경우 / 사용자 나이의 변화가 발생하였을 경우 수행
     */
    useEffect(() => {
        console.log("component Did Update");
    }, [props.appState, userInfo.userAge]);

    const fn_unmountCompoent = () => {
        setIsSHowTempComp(!isShowTempComp);
    }

    return (
        <>
            {console.log("Renering ...")}
            <div>
                <h1>Main Function Component 입니다.</h1>
                <div>{userInfo.userAge}</div>
                <button onClick={fn_unmountCompoent}>컴포넌트 제거</button>
                {
                    isShowTempComp && (
                        <LifeCycleUnmountComponent />
                    )
                }
            </div>
        </>
    )
};

export default LifecycleFunctionComponent;

const LifeCycleUnmountComponent = () => {

    useEffect(() => {
        return () => {
            console.log("component Will UnMount");
        }
    }, []);

    return (
        <div>
            <h1> Unmount Component</h1>
        </div>
    )

}