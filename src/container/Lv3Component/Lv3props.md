# props

## 개념

```
properties의 약자로, 부모의 어떤 값을 자식에게 전달할 때 사용한다.
```

### 비구조화 할당
- props들을 비구조화 할당하여 간결하게 사용할 수 있다.
```javascript
function Exam(props) {
    // 비구조화 할당
    const {name, color} = props;

    return <div>{name}</div>
}
```

### - defaultProps
- props의 기본값을 설정할 수 있다.
```javascript
Index.defaultProps = {
    name : '이름없음'
}
```

### - children
- 태그와 태그사이의 내용을 children이라는 props를 통해 받을 수 있다.
```javascript
function Parent({children}) {

    return <div>{children}</div>
}
```