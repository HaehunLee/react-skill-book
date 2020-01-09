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

## * Library ( Installed )
```
react-markdown
react-syntax-highligher
styled-components
mobx
mobx-react
react-tabs
Material-ui
babel-plugin-module-resolver : babel plugin 사용 라이브러리
react-router-dom
qs: 쿼리 문자열을 객체로 변환하는 라이브러리
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

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
