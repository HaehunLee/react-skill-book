export const markdown = `

# MobX

## mobx-react

- react에서 MobX를 decorator로 사용하려면, babel를 커스텀해야한다.
- babel를 커스텀하려면 eject를 해야함.
\`\`\`node
npm run eject // yarn eject
\`\`\`

- package.json 수정
- 수정이 완료되면 서버를 재시작한다.
\`\`\`json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
  }
\`\`\`


## Mobx Store
- redux와 같은 개념으로 Store가 존재한다.
- 하나의 스토어만 존재하는 redux와 달리, 여러 개의 스토어가 존재할 수 있다.

    **참조 파일 : stores/counter.js**

- Provide를 사용하여 컨테이너에 스토어를 적용한다.
- injectfh 컴포넌트에 스토어에 주입한다.

    **inject는 mobx-react의 함수로, 컴포넌트에서 스토어에 접근할 수 있게 해줌.**
    **( 스토어의 값을 컴포넌트의 props로 전달 )**

    **참조 파일 : src/Counter.js**
`