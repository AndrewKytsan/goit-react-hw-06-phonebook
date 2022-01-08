import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import s from './App.module.scss';
export default function App() {
    return (
        <div className={s.container}>
            <h1 className={s.mainTitle}>Phonebook</h1>
            <ContactForm />
            <h2 className={s.mainTitle}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}
