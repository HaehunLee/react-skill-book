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