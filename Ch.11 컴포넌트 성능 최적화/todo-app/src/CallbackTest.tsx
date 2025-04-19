import React, { useCallback, useEffect } from 'react';

const CallbackTest = ({ count }: { count: number }) => {
  const callback = useCallback(() => {
    console.log('callback 실행됨');
  }, []); // 빈 배열이므로 컴포넌트가 리렌더되더라도 재생성 안됨

  useEffect(() => {
    console.log('callback 함수 인스턴스:', callback);
  }, [callback]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={callback}>Call Callback</button>
    </div>
  );
};

export default CallbackTest;