import React from 'react';
import WithRouterSample from '../ReactRouterDom2/WithRouterSample';

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
            <WithRouterSample />
        </div>
    );
};

export default Profile;