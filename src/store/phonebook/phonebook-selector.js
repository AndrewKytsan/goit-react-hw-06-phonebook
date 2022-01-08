export const getContact = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
    const contacts = getContact(state);
    const filter = getFilter(state).toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter),
    );
};
