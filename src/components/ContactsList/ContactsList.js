import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactsList.module.css';

import ContactsListItm from './ContactsListItm'
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'

export default function ContactsList() {
    const dispatch = useDispatch();
    
    const contacts = useSelector(phonebookSelectors.getFilteredContacts);

    return (
        <>
            {contacts.length ?
                <ul className={styles.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <ContactsListItm
                    key={id}
                    name={name}
                    number={number}
                    onClickHendler={()=>dispatch(phonebookOperations.deleteContact(id))}
                />             
            ))
            }
                </ul> :
                <p>No contacts added</p>
        }
      </>  
    )
};
