import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from 'components/Loader/Loader';

import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterVisible = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts.length === 0) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = filterVisible();
  return (
    <ul>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : !contacts.length ? (
        <h3>You don't have any contacts yet</h3>
      ) : !filteredContacts.length ? (
        <h3>No matches found</h3>
      ) : (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            name={name}
            number={phone}
            id={id}
          ></ContactItem>
        ))
      )}
    </ul>
  );
};

export default ContactList;
