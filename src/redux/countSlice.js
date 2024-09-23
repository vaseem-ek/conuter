import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment(state,action){
            state.count++
        },
        decrement(state,action){
            state.count--
        },
        reset(state,action){
            state.count=0
        },
        addVal(state,action){
            state.count+=action.payload
        }
    }

})


export default counterSlice.reducer
export const {increment,decrement,reset,addVal}=counterSlice.actions
