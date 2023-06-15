import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Wrapper, Title, ContactsTitle } from '../styled';

export default function App() {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
