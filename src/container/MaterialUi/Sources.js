const MaterialUiJS = `
\`\`\`jsx
import React from 'react';
import MaterialButton from './MaterialButton';
import MaterialTable from './MaterialTable';

const MaterialUi = () => {
    return (
        <div>
            <p>Button</p>
            <MaterialButton />

            <p>Table</p>
            <MaterialTable />
        </div>
    );
};

export default MaterialUi;
\`\`\`
`

const MaterialButtonJS = `
\`\`\`jsx
import React from 'react';
import Button from '@material-ui/core/Button';

const MaterialButton = () => {
    return (
        <Button variant="contained" color="primary">
        Hello World
        </Button>
    );
};

export default MaterialButton;
\`\`\`
`

const MaterialTableJS = `
\`\`\`jsx
import React, { Component } from 'react';

// material-ui-components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

// withStyles 값 정의
const styles = theme => ({
root: {
width: "100%",
marginTop: theme.spacing.unit * 3,
overflowX: "auto"
},
table: {
minWidth: 1080
}
});

const customers = [
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
    },
    {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
    },
    {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
    }
]

const Row = (props) => {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    )
}

class MaterialTable extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>이미지</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>생년월일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => {
                        return <Row key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

// withStyles 주입
export default withStyles(styles)(MaterialTable);
\`\`\`
`

const markdown = `

# Material-ui [참조](https://material-ui.com/getting-started/installation/)
- Google Material기반의 스타일링 라이브러리

## install
\`\`\`
$ npm install @material-ui/core
\`\`\`

## customStyle
- withStyles 라이브러리를 사용하여, CSS를 적용할 수 있다.

### 소스 예제
\`출처: https://ndb796.tistory.com/216 [안경잡이개발자]\`

`

export { MaterialUiJS, MaterialButtonJS, MaterialTableJS, markdown } ;