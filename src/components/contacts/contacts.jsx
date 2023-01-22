import { Filter } from '../filter';
import {
  DeleteButton,
  ContactList,
  ContactName,
  ContactNumber,
} from './contacts.styled';
import { getContactsList, getFilterRequest } from 'redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/phonebook/operations';
import axios from 'axios';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contactsList, isLoading, error } = useSelector(getContactsList);
  const filterRequest = useSelector(getFilterRequest);

  const contactsFilter = () => {
    const normalizedFilter = filterRequest.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    console.log(axios.defaults.headers.common.Authorization);
    if (axios.defaults.headers.common.Authorization) {
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  const onDelete = e => {
    dispatch(deleteContacts(e.currentTarget.value));
  };

  const contacts = contactsFilter();
  return (
    <>
      <Filter></Filter>
      {isLoading && <p>Loading...</p>}
      {error !== null && <p>{error}</p>}
      {!isLoading && (
        <ContactList>
          {contacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                <ContactName>{name}</ContactName>:
                <ContactNumber>{number}</ContactNumber>
                <DeleteButton type="button" value={id} onClick={onDelete}>
                  delete
                </DeleteButton>
              </li>
            );
          })}
        </ContactList>
      )}
    </>
  );
};
