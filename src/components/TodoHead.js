import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadWrap = styled.div`
    border-bottom: 1px solid #ececec;
    padding: 48px 32px 24px;

    h1 {
        font-sie: 36px;
        color: #343a40;
        margin: 0;
    }

    .day {
        font-size: 21px;
        color: #868e96;
        margin-top: 4px;
    }

    .tasks-left {
        font-size: 18px;
        font-weight: bold;
        color: #20c997;
        margin-top: 40px;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayKo = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    });


   return (
        <TodoHeadWrap>
            <h1>{dateString}</h1>
            <p className="day">{dayKo}</p>
            <p className="tasks-left">할 일 {undoneTasks.length}개 남음</p>
        </TodoHeadWrap>
   );
}


export default TodoHead;