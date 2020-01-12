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