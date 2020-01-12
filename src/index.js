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
import {BrowserRouter} from 'react-router-dom';

// 단일 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
