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