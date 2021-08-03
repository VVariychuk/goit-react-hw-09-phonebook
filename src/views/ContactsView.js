import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import phonebookOperations from '../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../redux/phonebook/phonebook-selectors';

import Container from '../components/Container';
import Section from '../components/Section';
import AddContactsForm from '../components/AddContactsForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';

export default function ContactsView () { 
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(phonebookSelectors.getLoading)

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts())
  }, [dispatch]);
  
    return (
      <Container >
        <Section
          title={'Phonebook'}
          children={
            <AddContactsForm />
          }
        />
        <Section
          title={'Contacts'}
        >
          {
            isLoadingContacts
            ? <h1>Loading...</h1>
              : <>
              
              <Filter />
              
              <ContactList />
            </>
          }
        </Section>
      </Container>
    );
  };
