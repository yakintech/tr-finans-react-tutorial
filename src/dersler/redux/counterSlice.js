const { createSlice } = require("@reduxjs/toolkit");


//initial State global state anlamına geliyor
let counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        //reducerlar ile global state i yönetiyorum...
        increment: (state) => {
            state.value = state.value + 1;
        },
        decreament: (state) => {
            state.value = state.value - 1;
        },
        incrementByValue: (state, action)  => {
            state.value = state.value + action.payload;
        }
    }
})


export const {increment, decreament, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;