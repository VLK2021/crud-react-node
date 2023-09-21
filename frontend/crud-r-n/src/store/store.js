import {combineReducers, configureStore} from "@reduxjs/toolkit";

import userReducer from './slices/user.slice';


const rootReducer = combineReducers({
    users: userReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;