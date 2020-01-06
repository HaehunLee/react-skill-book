import React from 'react';
import Lv2JSX from './Lv2JSX';
import TransMd from '../../components/TransMd';
import { MainBox, ContentsBox, CodeBox, MdBox } from '../../components/styled';


const contents = `
\`\`\`javascript
import React from 'react';
import Hello from './Hello';
import '../../App.css';

const Lv2JSX = () => {
    const name = 'react';
    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : 24,
        padding : '1rem'
    }

    return (
        <div>
            <h2>Lv2. JSX</h2>
            <Hello 
                // 이런 식의 작성하는 주석문
            />
            <div style={style}>{name}</div>
            <div className="gray-box">gray-box</div>
            {/* 어쩌고 저쩌고 */}
        </div>
    );
}

export default Lv2JSX;
\`\`\`

`

const markdown = `

# JSX

## 규칙
<ol>

1. 태그는 꼭 닫혀있어야 한다.
    ( Self Closing Tag 가능 )
    \`\`\`html
    <div>태그 닫기</div>
    <Hello />
    \`\`\`

2. 두 개 이상의 태그는 하나의 태그로 감싸져야 한다.
    ( FlagMent (<></>)를 사용하면 편리함 )
    \`\`\`javascript
    <>
        <div>두개 이상의</div>
        <p>태그는 하나로 감싸야한다.</p>
    </>
    \`\`\`

3. JSX에서 변수를 표현할 때, {변수명} 으로 표현한다.
    \`\`\`javascript
    const name = '이렇게';
    return <div>JavaScript 값 : {name} </div>
    \`\`\`

4. style을 줄 때, 객체로 카멜표기법 사용.

5. JSX에서 class는 className="클래스명" 으로 표현한다.

    \`\`\`javascript
    const style = {
        background : 'gray',
    }
    return (
        <div style={style}>
            <div className="my-style">
                style과 className
            </div>
        </div>
    )
    \`\`\`

6. 주석은 {/* ~~~ */} 으로 표현한다.
    \`\`\`javascript
    return (
        <div>
            {/* 주석주석 */}
            <input
                // 이렇게도 주석
            />
        </div>
    )
    \`\`\`

</ol>

`

const index = () => {
    return (
        <MainBox>
            <ContentsBox><span>Contents</span><Lv2JSX /></ContentsBox>
            <CodeBox><span>Code</span><TransMd contents={contents} /></CodeBox>
            <MdBox><span>MarkDown</span><TransMd contents={markdown}/></MdBox>
        </MainBox>
    );
}

export default index;