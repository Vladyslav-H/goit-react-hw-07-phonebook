import { selectFilter } from 'redux/filter/filterelector';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const filtedContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);

  const normalizedFilter = filter.toLowerCase();

  if (contacts.length === 0) return;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
