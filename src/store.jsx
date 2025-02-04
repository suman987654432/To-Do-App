import {configureStore} from '@reduxjs/toolkit';
import myreducer from "./todoSlice";
const store = configureStore({

    reducer: {
        myslice: myreducer
    }
})
export default store;