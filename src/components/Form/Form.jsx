import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postContacts } from 'redux/contacts/contactsOperations';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { RiContactsBookFill } from 'react-icons/ri';

import { FormStyled, Button, Label, Input } from './Form.styled';
import {
  ItemIconStyled,
  FormIconStyled,
} from 'components/IconStyled/IconStyled';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newContact) {
      return alert(`${name} is alredy in contacts`);
    }

    dispatch(postContacts({ name, phone }));
    // .then(() => dispatch(getContacts()))
    // .then(() => resetForm())
    // .catch(e => console.error(e.message));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <RiContactsBookFill style={FormIconStyled} />
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          placeholder="Ivan Ivanenko"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        <span>Phone</span>
        <Input
          type="tel"
          name="number"
          placeholder="050 123 45 67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit">
        Add contact <MdPersonAddAlt1 style={ItemIconStyled} />
      </Button>
    </FormStyled>
  );
};
