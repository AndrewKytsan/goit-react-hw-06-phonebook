import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const addContact = createAction('contact/add', ({ name, number }) => ({
    payload: {
        id: uuid(),
        name,
        number,
    },
}));

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');

export { addContact, deleteContact, changeFilter };
