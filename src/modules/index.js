// root Reducer : createStore에서 스토어를 만들 때 리듀서를 하나만 사용해야하므로, 리듀서를 하나로 합침.
// combineReducers라는 유틸 함수 사용
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;