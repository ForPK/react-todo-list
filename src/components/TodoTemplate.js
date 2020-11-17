import React from 'react';
import styled from 'styled-components';

const TodoTemplateWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80%;
    max-width: 512px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateWrap>{children}</TodoTemplateWrap>
}

export default TodoTemplate;