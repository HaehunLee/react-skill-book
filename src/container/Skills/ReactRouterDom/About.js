import React from 'react';
import qs from 'qs';

const About = (props) => {
    const { location } = props;
    const query = qs.parse(location.search, {
        ignoreQueryPrefix : true // 문자열 맨 앞의 ?를 생략해줌.
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열이다.
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초 실습 중 입니다.</p>

            <p>localhost:3000/about?detail=true 로 접속해보기</p>
            {showDetail && <p style={{color:'red'}}>detail 값을 true로 설정.</p>}
        </div>
    );
};

export default About;