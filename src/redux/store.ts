import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers, } from 'redux';
import userReducer from './slice/userSlice';

const reducers = combineReducers({
    user: userReducer
});


export const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
});
