import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    font-size: 24px;
    border: 1px solid #ccc;
    border-radius: 16px;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
        color: #38d9a9;
        border: 1px solid #38d9a9;
    `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done && css`
        color: #ddd;
    `}
`;

// 쓰레기통
const Remove = styled.div`
    display: flex;
    font-size: 24px;
    color: #999;
    align-items: center;
    justify-content: center;
    opacity: 0;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    
`;

const TodoItemWrap = styled.div`
    display: flex;
    padding: 12px 0;
    align-items: center;
    &:hover {
        ${Remove} { /* 리무브를 특정 상황에만 보여주고 싶을때 */
            opacity: 1;
        }
    }
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemWrap>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemWrap>

    );
}

export default TodoItem;