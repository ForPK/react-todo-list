import React from 'react';
import styled from 'styled-components';

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
   return (
        <TodoHeadWrap>
            <h1>2020.11.17</h1>
            <p className="day">화요일</p>
            <p className="tasks-left">할 일 1개 남음</p>
        </TodoHeadWrap>
   );
}

export default TodoHead;