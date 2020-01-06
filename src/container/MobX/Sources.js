const MobxJS = `
\`\`\`jsx
import React from 'react';
import Counter from './Counter';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.

const counter = new CounterStore(); // 스토어 인스턴스 생성

const index = () => {
    return (
        <Provider counter={counter}>
        {/* Provider 에 props 로 넣어줍니다. */}
            <div>
                <Counter /> 
            </div>
        </Provider>
    );
};

export default index;
\`\`\`
`

const CounterJS = `
\`\`\`jsx
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// **** 함수형태로 파라미터를 전달해주면 특정 값만 받아올 수 있음.
@inject(stores => ({
  number: stores.counter.number,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease,
}))

@observer
class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
\`\`\`
`

const counterJS = `
\`\`\`jsx
import { observable, action } from 'mobx';

export default class CounterStore {
    @observable number = 0;

    @action increase = () => {
        this.number++;
    }

    @action decrease = () => {
        this.number--;
    }
}
\`\`\`
`

const markdown = `

# MobX

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

export { MobxJS, CounterJS, counterJS, markdown } ;