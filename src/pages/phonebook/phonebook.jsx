import { Contacts } from 'components/contacts/contacts';
import { ModalWindow } from 'components/modal/modal';
import { NewContactForm } from 'components/newContactForm/newContactForm';
import { useState } from 'react';
import { AddButton, Container, Header } from './phonebook.styled';

const Phonebook = () => {
  const [modalOpenState, setModalOpenState] = useState(false);

  const handleClick = e => {
    setModalOpenState(!modalOpenState);
  };

  return (
    <Container>
      <Header>Your contacts</Header>
      <AddButton onClick={handleClick}>Add contact</AddButton>
      {modalOpenState && (
        <ModalWindow toggleModal={handleClick}>
          <NewContactForm></NewContactForm>
        </ModalWindow>
      )}
      <Contacts></Contacts>
    </Container>
  );
};

export default Phonebook;
