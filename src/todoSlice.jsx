import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "myslice",
    initialState: {
        task: []
    },
    reducers: {
        addTask: (state, action) => {
            state.task.push({ id: Date.now(), text: action.payload, completed: false });
        },
        removeTask: (state, action) => {
            state.task = state.task.filter(task => task.id !== action.payload);
        },
        myEditSave: (state, action) => {
            state.task = state.task.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, text: action.payload.text };
                }
                return task;
            });
        },
        toggleComplete: (state, action) => {
            state.task = state.task.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        }
    }
});

export const { addTask, removeTask, myEditSave, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;