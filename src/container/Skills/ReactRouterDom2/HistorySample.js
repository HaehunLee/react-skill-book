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