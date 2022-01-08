import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getContact } from '../../store/phonebook/phonebook-selector.js';
import { addContact } from '../../store/phonebook/phonebook-actions';

import s from './ContactForm.module.scss';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();

    const formHandler = e => {
        e.preventDefault();
        contacts.map(contact => contact.name).includes(name)
            ? alert(`This ${name} is already in your contacts.`)
            : dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
    };

    const inputHandler = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    return (
        <form className={s.form} autoComplete="off" onSubmit={formHandler}>
            <span className={s.formLabel}>
                Name
                <br />
                <input
                    className={s.formInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={name}
                    required
                    onChange={inputHandler}
                />
            </span>
            <br />
            <span className={s.formLabel}>
                Number
                <br />
                <input
                    className={s.formInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    value={number}
                    onChange={inputHandler}
                    required
                />
            </span>
            <br />
            <button type="submit" className={s.formBtn}>
                Add contact
            </button>
        </form>
    );
}
