// 액션 타입 정의
// 모듈 이름 / 액션 이름 같은 형태
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

// 초기 상태 정의 및 리듀서 함수 만들기
const initialState = {
    number : 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE : 
            return {
                number : state.number + 1
            };
        case DECREASE : 
            return {
                number : state.number - 1
            };
        default :
            return state;
    }
}

export default counter;