import {createSlice} from  '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value++;
        },
        decrement:(state)=>{
            state.value--;
        },
        IncrementBy5:(state)=>{
            state.value+=5;
        }
    }
})
export const {increment,decrement,IncrementBy5} =counterSlice.actions;

export default counterSlice.reducer;