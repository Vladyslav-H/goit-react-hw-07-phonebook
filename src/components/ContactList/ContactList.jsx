import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from 'components/Loader/Loader';

import ContactItem from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/contacts/contactsOperations';
 import {
  selectContacts,
  selectError,
  selectIsLoading,
  filtedContacts,
} from 'redux/contacts/contactsSelector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const newContactsList = useSelector(filtedContacts) 
  return (
    <ul>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : !contacts.length ? (
        <h3>You don't have any contacts yet</h3>
      ) : !newContactsList.length ? (
        <h3>No matches found</h3>
      ) : (
        newContactsList.map(({ id, name, phone }) => (
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
