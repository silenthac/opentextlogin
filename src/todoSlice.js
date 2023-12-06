import {createSlice, nanoid } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
    
    str :""
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.str = action.payload;
            
        },
        // removeTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        // },
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer