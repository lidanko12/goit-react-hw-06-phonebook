import { createReducer } from "@reduxjs/toolkit";
import actions from './phonebook-actions';
import { combineReducers } from "redux";

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter((contacts) => !contacts.id.includes(payload))
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload
});


export default combineReducers({
    items,
    filter
})
