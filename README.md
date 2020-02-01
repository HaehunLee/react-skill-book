# react-skill-book

## * Learn
- Lv1. React ( 2020.01.02 ~ 수정 ) [참조](https://velog.io/@stampid/React%EB%9E%80)
- LV2. JSX ( 2020.01.03 ~ ) [참조](https://velopert.com/3626)
- Lv3. Component ( 2020.01.06 준비 ) [참조 도서](https://github.com/gilbutITbook/080203)
- MobX ( 2020.01.07 study ) [참조](https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z)
- Lv4. LifeCycle ( 2020.01.07 )[참조 도서](https://github.com/gilbutITbook/080203)
- Material-ui ( 2020.01.08 ) [참조](https://material-ui.com/getting-started/)
- babel-plugin-module-resolver ( 2020.01.09 )
- react-router-dom ( 2020.01.10) [참조 도서](https://github.com/gilbutITbook/080203)
- react-router 부가기능 ( 2020.01.12 ) [참조 도서](https://github.com/gilbutITbook/080203)
- react-redux ( 2020.01.13 ) [참조 도서](https://github.com/gilbutITbook/080203)

## * Library ( Installed )
```
react-markdown
react-syntax-highligher
styled-components
mobx : 상태 관리 라이브러리
mobx-react : 상태 관리 라이브러리
react-tabs
Material-ui
  @material-ui/core
  @material-ui/icons
babel-plugin-module-resolver : babel plugin 사용 라이브러리
react-router-dom
qs: 쿼리 문자열을 객체로 변환하는 라이브러리
redux : 상태 관리 라이브러리
react-redux : 상태 관리 라이브러리
redux-devtools-extension : Redux DevTools 사용 라이브러리
...
```

## Custom Component
```
TransMd : markdown을 react코드에서 사용할 수 있게 해줌. ( JSX 하이라이팅 포함 )
AutoTab : 페이지들을 Tab에 주입하여 탭단으로 볼 수 있게 해줌.
```






#### issue record :

1. import 절대경로 만들기
- babel-plugin-module-resolver 설치
```
$ npm install --save-dev babel-plugin-module-resolver
```

- package.json 수정
```
"babel" : {...
  ...,
  {
    "plugins": [
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          "test": "./test",
          "underscore": "lodash"
        }
      }]
    ]
  }
}
```