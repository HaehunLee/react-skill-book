import React from 'react';
import './Lv1React.css';
import { MainBox } from 'components/styled';

const index = () => {
    return (
        <MainBox>
            <div style={{padding:'5px'}}>
                <h2>Lv1. React</h2>

                <h3>React란?</h3>
                <p style={{width : '400px'}}>
                    리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리이다. 
                    리액트는 컴포넌트 기반으로 되어있어, 컴포넌트에 데이터를 주면 개발자가 설계한대로 UI가 설계되어 사용자에게 보여진다.
                </p>

                <h3>작업 환경</h3>
                <table className='Lv1-table'>
                    <tbody>
                        <tr>
                            <th>설치</th>
                            <th>버전</th>
                            <th>기타</th>
                        </tr>
                        <tr>
                            <td>node.js</td>
                            <td>12.13.0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>npm</td>
                            <td>5.6.0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Visual Studio Code</td>
                            <td>latest</td>
                            <td>확장 프로그램 설치</td>
                        </tr>
                    </tbody>
                </table>

                <span style={{paddingTop : '10px'}}>VS code 확장프로그램</span>
                <ol>
                    <li>ESLint : 자바스크립트 문법 및 코드 스타일을 검사해주는 도구.</li>
                    <li>Reactjs Code Snippets : 리액트 컴포넌트 및 라이프사이클 함수를 작성할 때 단축 단어 사용.</li>
                    <li>Prettier-Code formatter : 코드 스타일을 자동으로 정리해주는 도구.</li>
                </ol>
            </div>
        </MainBox>
    );
};

export default index;