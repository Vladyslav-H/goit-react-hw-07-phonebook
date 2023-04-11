import ContactList from '../ContactList/ContactList';
import { Form } from '../Form/Form';
import Filter from 'components/Filter/Filter';
import { Container, ContactContainer, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />

      <ContactContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactContainer>
    </Container>
  );
};
