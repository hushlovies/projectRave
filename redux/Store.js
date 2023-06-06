import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const store = configureStore({
    reducer: {
        audio: Reducer,
    },
});

export default store;