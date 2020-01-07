const LifeCycleJS = `
\`\`\`jsx
import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class Lv4LifeCycle extends Component {
    state = {
        color : '#000000',
    }

    handleClick = () => {
        this.setState({
            color : getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default Lv4LifeCycle;
\`\`\`
`

const LifeCycleSampleJS = `
\`\`\`jsx
import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null,
    }

    myRef = null; // ref를 설정할 부분
    
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return { color : nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate : ', nextProps, nextState);

        // 숫자의 마지막 자리가 4면 리렌더링되지 않는다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상 : ' , snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color : this.props.color
        };

        return (
            <div>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;
\`\`\`
`

const ErrorBoundaryJS = `
\`\`\`jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error : false
    };

    componentDidCatch(error, info) {
        this.setState({
            error : true
        });
        console.log('componentDidCatch :', {error, info});
    }

    render() {
        if(this.state.error) return <div>에러가 발생했습니다!</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;
\`\`\`
`

const markdown = `

# MobX
- 상태 관리 라이브러리.

## mobx-react

- react에서 MobX를 decorator로 사용하려면, babel를 커스텀해야한다.
- babel를 커스텀하려면 eject를 해야함.
\`\`\`node
npm run eject // yarn eject
\`\`\`

- package.json 수정
- 수정이 완료되면 서버를 재시작한다.
\`\`\`json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
  }
\`\`\`


## Mobx Store
- redux와 같은 개념으로 Store가 존재한다.
- 하나의 스토어만 존재하는 redux와 달리, 여러 개의 스토어가 존재할 수 있다.

    **참조 파일 : stores/counter.js**

- Provide를 사용하여 컨테이너에 스토어를 적용한다.
- injectfh 컴포넌트에 스토어에 주입한다.

    **inject는 mobx-react의 함수로, 컴포넌트에서 스토어에 접근할 수 있게 해줌.**
    **( 스토어의 값을 컴포넌트의 props로 전달 )**

    **참조 파일 : src/Counter.js**
`

export { LifeCycleJS, LifeCycleSampleJS, ErrorBoundaryJS, markdown } ;