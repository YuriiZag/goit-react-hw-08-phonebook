import { getContactsList } from 'redux/phonebook/selectors';
import {
  Header,
  PhonebookForm,
  TypingField,
  Label,
  SubmitButton,
} from './newContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/phonebook/operations';

export const NewContactForm = () => {
  const contactsList = useSelector(getContactsList);
  const dispatch = useDispatch();

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget.elements;
    if (contactsList.length > 0) {
      const nameList = contactsList.map(contact => contact.name.toLowerCase());
      console.log(nameList);
      if (!nameList.includes(name.value.toLowerCase())) {
        dispatch(
          addContacts({
            name: name.value,
            number: number.value,
          })
        );
      } else {
        window.alert(`${name.value} is already in list.`);
      }
    } else {
      dispatch(
        addContacts({
          name: name.value,
          number: number.value,
        })
      );
    }
    evt.currentTarget.reset();
  };

  return (
    <>
      <Header>Phonebook</Header>
      <PhonebookForm autoComplete="off" onSubmit={onSubmitHandler}>
        <Label htmlFor="name">
          Name
          <TypingField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <TypingField name="number" type="tel" required></TypingField>
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </PhonebookForm>
    </>
  );
};
