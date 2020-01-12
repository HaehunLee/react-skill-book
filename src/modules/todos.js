// 단계1
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'todos/INSERT'; // 새로운 todo등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/체크해제
const REMOVE = 'todos/REMOVE'; // todo 제거

// 단계2
// 파라미터가 필요한 액션 생성 함수
export const changeInput = input => ({
    type : CHANGE_INPUT,
    input
});

let id = 3; // insert 호출 시 1씩 더해짐. ( 초기 id 1,2 존재 가정 )
export const insert = text => ({
    type : INSERT,
    todo : {
        id : id++,
        text,
        done : false
    }
});

export const toggle = id => ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
});

// 단계3
const initialState = {
    input : '',
    todos : [
        {
            id : 1,
            text : '리덕스 기초',
            done : true
        },
        {
            id : 2,
            text : '리액트와 리덕스',
            done : false
        }
    ]
}

function todos(state = initialState, action){
    switch(action.type) {
        case CHANGE_INPUT :
            return {
                ...state,
                input : action.input
            };
        case INSERT :
            return {
                ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE :
            return {
                ...state,
                todos : state.todos.map(todo => 
                    todo.id === action.id ? { ...todo, done : !todo.done } : todo
                )
            };
        case REMOVE :
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id)
            };
        default : 
            return state;
    }
}

export default todos;