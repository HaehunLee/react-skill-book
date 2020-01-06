import React from 'react';
import TransMd from '../../components/TransMd';

const contents = `

# 제목 1

### 테이블
|제목|내용|
|---|---|
|리액트|마크다운|
|ㄴㅇㄹ|ㄴㅇㄹㄴㅇㄹ|

\`\`\`
코드블럭
\`\`\`

**굵게**

*기울이기*

>인용문

글자 \`강조\`

`;

const index = () => {
    return (
        <div>
            <h2>Lv3. Component</h2>

            <h3>class Component</h3>

            <TransMd contents={contents} />

            <h3>functional Component</h3>
            <p>

            </p>
        </div>
    );
};

export default index;   