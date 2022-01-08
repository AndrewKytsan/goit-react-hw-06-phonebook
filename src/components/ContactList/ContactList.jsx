import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../store/phonebook/phonebook-actions';
import { getFilteredContacts } from '../../store/phonebook/phonebook-selector';

import s from './ContactList.module.scss';

import ContactItem from '../ContactItem/ContacItem';

function ContactList() {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const removeContact = id => dispatch(deleteContact(id));

    return (
        <ul className={s.contactList}>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onRemoveContact={removeContact}
                />
            ))}
        </ul>
    );
}

export default ContactList;
