import React from 'react';

const TodoItem = (props) => {
    const { todo, onToggle, onRemove } = props;

    return (
        <div>
            <input type="checkbox" 
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration : todo.done ? 'line-through' : 'none'}}>
                {todo.text}
            </span>        
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};

const Todos = (props) => {
    const {
        input,  // 인풋에 입력될 텍스트
        todos,  // 할 일 목록 객체
        onChangeInput,
        onInsert,
        onToggle,
        onRemove,
    } = props;

    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput(''); // 등록 후 인풋 상태 초기화
    }

    const onChange = e => onChangeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todos;