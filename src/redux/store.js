import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const store=configureStore({
    reducer:{
        counterReduce:countSlice

    }
})

export default store