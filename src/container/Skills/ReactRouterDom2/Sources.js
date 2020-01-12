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

const ReactRouterDom2JS = `
\`\`\`jsx
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../ReactRouterDom/Home';
import About from '../ReactRouterDom/About';
import Profiles from '../ReactRouterDom/Profiles';
import HistorySample from './HistorySample';

const ReactRouterDom2 = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/profiles">프로필</Link></li>
                <li><Link to="/history">History 예제</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path={['/about', '/info']} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                // path를 정의하지 않으면, 모든 상황에 렌더링된다.
                render={({location}) => (
                    <div>
                        <h2>존재하지 않는 페이지입니다!</h2>
                        <p>{location.pathname}</p>
                    </div>
                )}
                />
            </Switch>
        </div>
    );
};

export default ReactRouterDom2;
\`\`\`
`

const ProfilesJS = `
\`\`\`jsx
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
`

const ProfileJS = `
\`\`\`jsx
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
\`\`\`
`

const HistorySampleJS = `
\`\`\`jsx
import React, { Component } from 'react';

class HistorySample extends Component {
    
    // 뒤로가기
    handleGoBack = () => {
        this.props.history.goBack();
    }

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        // 페이지 변화 시, 확인할 수 있게됨.
        this.unlock = this.props.history.block('정말 나가시겠습니까?');
    }

    componentWillMount() {
        // 컴포넌트가 언마운트되면 질문을 멈춤
        if (this.unblock) {
            this.unlock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로가기</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;
\`\`\`
`
const WithRouterSampleJS = `
\`\`\`jsx
import React from 'react';
import { withRouter } from 'react-router-dom';


const WithRouterSample = (props) => {
    const { location, match, history } = props;

    return (
        <div>
            <h4>location</h4>        
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />

            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

// 컴포넌트를 withRouter로 감싼다.
export default withRouter(WithRouterSample);
\`\`\`
`

const markdown = `

# react-router-dom의 부가 기능

## history
- match나 location처럼 컴포넌트에 전달되는 props중 하나,
- 컴포넌트 내에 구현하는 함수에서 라우터 API를 호출할 수 있다.
\` HistorySample.js 참조 \`

## withRouter
- HoC(Higher-order Component).
- 라우트 사용 컴포넌트가 아니어도 match, location 등 객체를 사용할 수 있게 해줌.
\`\`\`
WithRouterSample.js 참조 
withRouter는 자신을 보여준느 컴포넌트를 기준으로 match를 전달한다.
\`\`\`

## Switch
- 여러 Route를 감싸서 그 중 일치하는 단 하나의 라우트만을 렌더링 시켜준다.

## NavLink
- Link와 비슷한 컴포넌트로, 경로와 Link의 경로가 일치할 경우 특정 스타일을 적용할 수 있다.
\` Profiles.js 15행 참조 \`
`

export { indexJS, ReactRouterDom2JS, ProfileJS, ProfilesJS, HistorySampleJS, WithRouterSampleJS, markdown } ;