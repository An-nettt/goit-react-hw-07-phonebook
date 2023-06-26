import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { getContacts } from 'redux/selectors';
import { PhonebookForm, Text, Input, Button } from '../../styled';
import { addContact } from 'redux/contacts/thunks';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const auditContacts = contacts.items.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (auditContacts.length === 1) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </PhonebookForm>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
