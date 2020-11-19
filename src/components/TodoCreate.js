import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
    display: flex;
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    width: 80px;
    height: 80px;
    font-size: 60px;
    color: #fff;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    outline: none;
    background: #38d9a9;

    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    transition: 0.123s all ease-in;
    ${props => props.open && css`
        background: #ff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const InsertForm = styled.form`
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    border-top: 1px solid #e9ecef;
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;
`;

const Input = styled.input`
    width: 100%;
    font-size: 18px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    padding: 12px;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    
    
    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            placeholder="할 일을 입력 후, Enter를 눌러주세요"
                            autoFocus
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);