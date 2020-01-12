const indexJS = `
\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';
// store 생성, 리듀서 적용, Provider 생성, DevTools 라이브러리
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 단일 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
document.getElementById('root'));
\`\`\`
`

const markdown = `
# Redux
- MobX, Context API 와 비슷한 상태 관리 라이브러리로, 규모가 큰 프로젝트나 효율적인 비동기작업을 할 때 이용된다.

## Action
- 상태에 어떠한 변화가 필요할 때, 액션이라는 것이 발생함.
- type 필드를 반드시 가지고 있어야함.
\`\`\`jsx
{
    type : 'ADD',
    data : {
        id : 1,
        text : '리덕스 배움'
    }
}
\`\`\`
- Action 생성함수 : 액션 객체를 만들어주는 함수.
\`\`\`jsx
function addList = (data) => {
    return {
        type : 'ADD',
        data
    }
}
\`\`\`

## Reducer
- 변화를 일으키는 함수
- 액션을 만들어서 발생시키면, 리듀서가 현 상태와, 액션객체를 받아서 새로운 상태를 반환한다.
\`\`\`
const initailState = {
    count : 1
};

function reducer(state = initialState, action) {
    switch ( action.type) {
        case ADD :
            return {
                count : state.count + 1
            };
        default : 
            return : state;
    }
}
\`\`\`

## Store
- 프로젝트에 리덕스를 적용하는 스토어.
- 한 개의 프로젝트에는 리덕스 스토어는 한개만 가질 수 있다.

## Dispatch
- 스토어의 내장 함수 중 하나.
- 액션을 발생시키는 것

## subscribe
- subscribe함수에 리스너 함수를 파라미터로 호출하면, 이 함수가 액션이 디스패치되어
  상태가 업데이트 될 때 마다 호출된다.
\`\`\`jsx
const listner = () => {
    console.log('상태 업데이트');
}
const unscribe = store.subscribe(listner);

unscribe(); // 구독을 비활성화할 때 함수를 호출.

## react-redux
- redux 주요 패턴
\`\`\`
Presentational Component : 상태관리 없이, props를 받아와 UI를 보여줌.
Container Component : 리덕스와 연동된 컴포넌트로, 상태를 받고, 액션을 디스패치함
\`\`\`

### 일반적인 구조 : actions폴더, constants폴더, reducers폴더
- 기능 추가마다 폴더별로 파일을 수정해야함. // 기능별로 나눠보기 용이함.
### Ducks 패턴 : modules 폴더
- 기능별로 파일 하나에 몰아서 다 장석하는 방식.
`

export { indexJS, markdown }