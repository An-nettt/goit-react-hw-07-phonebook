import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/thunks';
import ContactListElem from '../ContactListElem/ContactListElem';

import { ContactListWrapper } from '../../styled';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterContact = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = String(filterContact).toLowerCase();

    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactListWrapper>
        {filterContacts.map(({ id, name, number }) => (
          <ContactListElem contactsEl={{ id, name, number }} />
        ))}
      </ContactListWrapper>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
