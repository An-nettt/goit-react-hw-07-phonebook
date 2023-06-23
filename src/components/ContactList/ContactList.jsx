// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import ContactListElem from '../ContactListElem/ContactListElem';

import { ContactListWrapper } from '../../styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = String(filterContact).toLowerCase();
    console.log(contacts.contacts.items);

    return contacts.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <ContactListWrapper>
      {filterContacts.map(({ id, name, number }) => (
        <ContactListElem contactsEl={{ id, name, number }} />
      ))}
    </ContactListWrapper>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
//   onDeleteContact: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
// };
