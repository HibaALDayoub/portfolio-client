import { configureStore } from "@reduxjs/toolkit";
import data from './mSlice.js'

export default configureStore({
    reducer:{
        data,
    },
});
