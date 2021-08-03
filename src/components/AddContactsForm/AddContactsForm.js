import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from "../../redux/phonebook/phonebook-selectors";

import styles from './AddContactsForm.module.css'

export default function AddContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getAllContacts)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
    

  const handleChange = useCallback( e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        console.warn(`Tipe of fieldname ${name} is not valid`);
    };
  }, []);

  const handleSubmit = useCallback( e => {
    e.preventDefault();

    if (contacts.some((i) => i.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${name} is already in contacts`);
      } else {
        dispatch(phonebookOperations.addContact( name, number ));

        setName('');
        setNumber('');
      }

  }, [dispatch, name, number, contacts]);


  return (
    <form onSubmit={handleSubmit}
      className={styles.form}
    >
      <label>
        Name
        <input
          className={styles.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button
        type="submit"
        className={styles.btnAdd}
      >
        Add contact
      </button>
    </form>
  );
};
