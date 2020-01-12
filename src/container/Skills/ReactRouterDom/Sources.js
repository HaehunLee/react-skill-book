const indexJS = `
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

\`\`\`
`

const ReactRouterDomJS = `
\`\`\`jsx
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
// import Profile from './Profile';
import Profiles from './Profiles';

const ReactRouterDom = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>

                {/* 서브라우트화 */}
                <li><Link to="/profiles">프로필</Link></li>
                {/* <li><Link to="/profile/leehaehun">Copotter 프로필</Link></li> */}
                {/* <li><Link to="/profile/kimjihye">ZeZe 프로필</Link></li> */}
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
        {/* <Route path="/about" component={About} />
            <Route path="/info" component={About} />
                여러개 path 설정 ==> */}
        <Route path={['/about', '/info']} component={About} />
        {/* URL 파라미터 지정 */}
        {/* <Route path="/profile/:username" component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        </div>
    );
};

export default ReactRouterDom;
\`\`\`
`

const AboutJS = `
\`\`\`jsx
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초 실습 중 입니다.</p>
        </div>
    );
};

export default About;
\`\`\`
`

const HomeJS = `
\`\`\`jsx
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>메인 페이지.</p>
        </div>
    );
};

export default Home;
\`\`\`
`

const ProfileJS = `
\`\`\`jsx
import React from 'react';

const data = {
    leehaehun : {
        nickname : 'Copotter',
        description : '리액트 개발자 이해훈'
    },
    kimjihye : {
        nickname : 'ZeZe',
        description : '서버 개발자 김지혜'
    }
}

const Profile = (props) => {
    // URL parameter => match 객체 params값 참조.
    const { username } = props.match.params;
    const profile = data[username];

    if (!profile) {
        return <div>존재하지 않는 사용자.</div>
    }
    return (
        <div>
            <h3>{username}({profile.nickname})</h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
\`\`\`
`

const ProfilesJS = `
\`\`\`jsx
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li><Link to="/profiles/leehaehun">leehaehun</Link></li>
                <li><Link to="/profiles/kimjihye">kimjihye</Link></li>
            </ul>

            <Route
                path="/profiles"
                exact
                // == exact=true
                render={() => <div>사용자를 선택해주세요.</div>}
                // component 대신 jsx를 넣고 싶을때 render함수 사용.
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
\`\`\`
`

const markdown = `

# react-router-dom

## - install
\`\`\`node
$ npm install --save react-router-dom
\`\`\`

## - 적용
- src/Index.js에 BrowserRouter로 감싼다.
\`\`\`jsx
ReactDOM.render(
  <BrowserRouter>
      <App /> 
  </BrowserRouter>,
document.getElementById('root'));
\`\`\`

## - Route Component
- Route컴포넌트로 path를 컴포넌트와 연결한다.
\`\`\`jsx
<Route path="주소" component={컴포넌트} />
\`\`\`

## - exact props
- "/"와 다른 path들의 겹치는 것을 방지할 수 있음.
\`\`\`jsx
<div>
    <Route path="/" component={Home} exact={true} />
    <Route path="/about" component={About} />
</div>
\`\`\`

## - Link Component
- 클릭하여 다른 주소로 이동시켜 주는 컴포넌트. (a태그와 달리, 페이지 전환 방지)
\`\`\`jsx
<Link to="주소">버튼</Link>
\`\`\`

## - URL 파라미터와 쿼리
- 페이지에 동적인 값을 전달할 때 사용된다.
- 파라미터 : /profiles/copotter
\`\`\`
URL 파라미터는 match라는 객체의 params값을 참조한다.
\`\`\`

- 쿼리 : /about?detail=true
- 쿼리는 location 객체에 있는 search값에서 조회. (props로 받게된다.)
\`\`\`jsx
location

{
  "pathname": "/about",
  "search": "?detail=true",
  "hash" : ""
}
\`\`\`
- qs라이브러리 : 쿼리 문자열을 객체로 변환할 때 사용.
\`\`\`node
$ npm install --save qs
\`\`\`

## 서브 라우트
- 라우트 내부의 라우트.
\`\`\`jsx
<Route
    path="/profiles"
    exact
    render={() => <div>사용자를 선택해주세요.</div>}
    // component 대신 jsx를 넣고 싶을때 render함수 사용.
/>
\`\`\`
`

export { indexJS, ReactRouterDomJS, HomeJS, AboutJS, ProfileJS, ProfilesJS, markdown } ;