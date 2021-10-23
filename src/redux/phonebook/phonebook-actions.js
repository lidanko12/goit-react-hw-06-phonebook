import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const changeFilter = createAction('phonebook/change_filter');
const deleteContact = createAction('phonebook/delete');
const addContact = createAction('phonebook/add' , (name,number)=>({
    payload: {id:shortid.generate(),
    name,
    number,},}));


const actions = { changeFilter, deleteContact, addContact };
export default actions;