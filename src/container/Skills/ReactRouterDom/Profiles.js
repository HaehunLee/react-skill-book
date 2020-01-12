import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'white',
    };

    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li><NavLink activeStyle={activeStyle} to="/profiles/leehaehun" active>leehaehun</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to="/profiles/kimjihye">kimjihye</NavLink></li>
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