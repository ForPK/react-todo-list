import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: false,
    },
    {
        id: 2,
        text: '컴포넌트 스타일링 하기',
        done: false,
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false,
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false,
    },
];

/* CREATE, TOGGLE, REMOVE */

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// state를 위한 context
const TodoStateContext = createContext();
// dispatch를 위한 context
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// todoContext가 렌더링 될 필요없을때도 렌더링이 되기 때문에
// 따로 만들어줌(최적화 이유). context를 쉽게 만들기 위한 커스텀 Hook
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
