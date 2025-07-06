### 리액트 라우터로 SPA 개발하기

> SPA 는 단 하나의 페이지로 구성된 Application 을 의미

기존에는 페이지 이동이나 로딩할 때마다, html 과 서버에서 리소스를 받아와 해석해 렌더링하는 등의 과정을 거쳤다.
하지만, 화면 이동이 많거나, 모던 웹 애플리케이션의 경우 이런 과정에 속도가 느리거나 과부하가 발생할 수 있다.

따라서, 요즘에는 <b>필요한 부분만 자바스크립트에서 변환해주는 방식을 사용한다.</b>


이 때, 한 화면이 아닌 동작에 따라 다른 주소의 다른 화면을 보여주는 과정을 **라우팅** 이라고 한다.
리액트는 라우터를 내장하지 않고 있고, 외부 라이브러리(react-router, Next.js) 을 사용한다.

<hr/>

### SPA 단점
1) App 규모가 커지면, JS 파일이 커진다.
모든 페이지 스크립트를 가지고 와야하기 때문에 ( 이는 코드 스플리팅(Code splitting) 으로 해결할 수 있다. )
 ※ 코드 스플리팅(Code splitting) : 라우트별로 파일을 분리하는 방법

2) JS 를 실행할 때까지, 페이지가 비어 있을 수 있다. (JS 파일이 로딩되는 동안, 흰 페이지가 나타날 수 있다.)
이는 서버 사이드 렌더링을 통해 해결가능하다.

<hr/>

### react-router
```
yarn add react-router-dom@6.15.0
```
<span style="font-size: 12px; color: #8C8C8C">※ 7.6.2 버전의 경우, 아래 오류가 발생 (6.15.0 으로 설치해서 사용)</span>
![image](./images/react-router-dom-install-error.png)



react-router-dom 을 적용하기 위해서는 우선, index.tsx 부분의 <App> 컴포넌트를 <BrowserRouter> 로 감싸주면 된다.
```
// index.tsx
<BrowserRouter>
    <App />
</BrowserRouter>
```
<br/>

책에서 나오는 나오는 버전은 v5 로 현재 v6 버전에서와 다르다.
```
(v5) <Route path='/' component={Home}/>
(v6) <Route path='/' element={<Home/>}/>
```

책에서는 Route 를 통해서만 구성이 가능했지만, 현재에서는 <Routes> 태그로 감싸놓아야만 한다.

<span style="font-size: 12px; color: #8C8C8C">※ v6 으로 올라가면서 변경된 사항들 
https://velog.io/@soryeongk/ReactRouterDomV6</span><br/><br/>


<div style="height: 30px; line-height: 30px; font-weight: bold; padding-left:10px; background-color:#DCFFE4;">App.tsx</div>

```
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
};

export default App;
```


<Link> 컴포넌트를 활용해, 다른 Path 로 이동할 수 있다.

```
<Link to="/about">About</Link>
```

v6 으로 올라가면서, 하나의 router 로 다중의 path 를 지원하는 기능은 더 이상 제공되지 않는다.
https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router

<hr/>

### URL 파라미터 & 쿼리
페이지 이동 시, 값을 전달하는 방법으로는 파라미터와 쿼리 방식으로 가능하다.
<span style="font-size: 13px; color: #5D5D5D">* 파라미터 : /about/param</span>
<span style="font-size: 13px; color: #5D5D5D">* 쿼리 : /about?query=true</span>
<br/>

보통 파라미터는 조회할 때 사용하고, 쿼리는 검색 혹은 페이지 옵션을 전달할 때 사용한다.


<span style="font-size: 17px; color: black">1. URL 파라미터</sapn>
```
<Link to="/profile/velopert">Velopert Profile</Link>
<Route path='/profile/:username' element={<Profile/>}/>
```
라우팅 타겟 컴포넌트에서 값을 받는 과정은 v5, v6 이 다르다.
```
// v5
const Profile = ({ match }) => {
  const { username } = match.params;
}
// v6
const Profile = () => {
    const { username } = useParams();
}
```

<div style="height: 30px; line-height: 30px; font-weight: bold; padding-left:10px; background-color:#DCFFE4;">Profile.tsx</div>

```
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
```

<span style="font-size: 17px; color: black">2. URL 쿼리</sapn>

query 의 경우, location 객체에 search 속성값을 활용한다.
해당 객체는 props 로 전달되는데, 여기에는 아래와 같은 값을 가지고 있다.
```
{
    'pathname': '/about',
    'search': '?query=true',
    'hash': ''
}

<Link to="/about?detail=true">Detail Page</Link>
```
URL 파라미터와 동일하게 URL 쿼리 또한, v5, v6 이 다르다.

```
// v5
const About = ({ location }) => {
    const { search } = location;
}
// v6
const About = () => {
    const location = useLocation();
}
```

또한, search 값이 문자열이므로 객체로 변환하는 방법으로 책에서는 qs 라이브러리를 언급하지만,
공식 사이트에서는 URLSearchParams 방식을 샘플로 제공하고 있다.

URLSearchParams 를 사용하는 이유는 location.search 를 가지고오면, ?query=true 문자열 구조를 parsing 하는 과정이 필요한데, 이를 간편하게 하기 위함이다.
(※ v7 은 또 다르다...)

[참조 링크] https://v5.reactrouter.com/web/example/query-parameters
[참조 링크 v7] https://velog.io/@bigwave-cho/React-%EC%BF%BC%EB%A6%AC-%EC%8A%A4%ED%8A%B8%EB%A7%81
[useSearchParams] https://reactrouter.com/api/hooks/useSearchParams
```
// v5
const qeury = qs.parse(loc.search, {
    ignoreQueryPrefix: true     // ? 를 생략
});

// v6
const { search } = useLocation();
React.useMemo(() => new URLSearchParams(search), [search]);
console.log(query.get('detail'));
```

<div style="height: 30px; line-height: 30px; font-weight: bold; padding-left:10px; background-color:#DCFFE4;">About.tsx</div>

```
import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const About = () => {
    const query = useQuery();
    const showDetail = query.get('detail') === 'true';

    return (
        <div>
            <h1>About</h1>
            <p>{showDetail && <p>Hidden Page</p>}</p>
        </div>
    );
};

export default About;
```

<hr/>

### Sub Route
서브 라우트(Sub Route) 는 라우트 내부에 또 다른 라우트를 의미한다.
한 화면 내에서 서브 화면으로 들어가는 개념이다.

책(v5) 에서 언급하고 있는 exact 속성은 v6 에서 사라졌다.
만약 하위경로에 여러 라우팅을 매칭시키고 싶다면 다음과 같이 URL 뒤에 * 을 사용하여 일치시킬 수 있다.

또한, v6 에서부터는 상대경로를 제공한다.

[v6 React Router 변경사항] https://romantech.net/1132
[참고링크] https://ui.dev/react-router-nested-routes
[참조링크] https://kyung-a.tistory.com/36


<div style="height: 30px; line-height: 30px; font-weight: bold; padding-left:10px; background-color:#DCFFE4;">App.tsx</div>

```
...
<li>
  <Link to="/profiles">Profiles</Link>
</li>

<Routes>
  ...
  <Route path="/profiles/*" element={<Profiles/>}/>
</Routes>
```

<div style="height: 30px; line-height: 30px; font-weight: bold; padding-left:10px; background-color:#DCFFE4;">Profiles.tsx</div>

```
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <div>User List</div>
            <ul>
                <li>
                    <Link to="profile/velopert">Velopert</Link>
                </li>
                <li>
                    <Link to="profile/gildong">Gildong</Link>
                </li>
            </ul>

            <Routes>
                <Route path="*" element={<div>Select User</div>} />
                <Route path="profile/:username" element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default Profiles;
```

<hr/>

### 부가기능
 
<span style="font-size: 17px; color: black">1. history</sapn>

react-router 에서는 history 기능을 제공하는데, 
이는 특정 행동에서 뒤로가거나 다른 페이지로의 이탈을 방지하는 등의 기능을 제공할 수 있다.

```
// v5
useHistory()
// v6
useNavigate()
```

nav(-1);        // 뒤로가기
nav('/');       // Home


또한, unblock 의 경우, 동작하지 않으며 아래 샘플과 같이 적용해야 한다.

https://blog.woolta.com/categories/1/posts/211
https://kyung-a.tistory.com/36

※ Switch 는 Routes 로 명칭이 변경되었다.

 
<br/>
<span style="font-size: 17px; color: black">2. NavLink</sapn>

NavLink 를 통해 Active 된 링크에 스타일이나 CSS 를 적용할 수도 있다.
하지만, v6 들어서면서, activeStyle 속성이 사라지고, isActive 등에 대한 현재 상태 값을 통해서 구분할 수 있다.

```
// v5
<NavLink activeStyle={activeStyle} to='/profile/velopert'></NavLink>

// v6
// isActive 는 NavLinkProps 에 지정된 변수명으로 변경 불가
<NavLink to='profile/velopert' style={({isActive}) => {
    return {
        background: (isActive) ? 'black' : '',
        color: (isActive) ? 'white' : ''
    }
}}>Jon</NavLink>
```