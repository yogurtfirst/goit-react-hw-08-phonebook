import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});