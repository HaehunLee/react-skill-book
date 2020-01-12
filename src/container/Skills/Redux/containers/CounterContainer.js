// Container 만들기
import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from 'modules/counter';
import Counter from 'components/Counter';

const CounterContainer = (props) => {
    const { number, increase, decrease } = props;

    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};


/*
const mapStateToProps = state => ({
    number : state.counter.number,
});

const mapDispatchToProps = dispatch => ({
    increase : () => {
        dispatch(increase());
    },
    decrease : () => {
        dispatch(decrease());
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);
*/
// ==
/*
export default connect(
    state => ({
        number : state.counter.number,
    }),
    dispatch => ({
        increase : () => dispatch(increase()),
        decrease : () => dispatch(decrease()),
    }),
)(CounterContainer);
*/
// ==
export default connect(
    state => ({
        number : state.counter.number,
    }),
    {
        // 파타미터 함수 형태가 아닌, 액션 객체형태르 dispatch에 보냄.
        increase,
        decrease,
    },
)(CounterContainer);