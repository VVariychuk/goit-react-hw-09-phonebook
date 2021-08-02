/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,    
} from './phonebook-actions'


const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error));
    }
};

const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)))
};

export default {
    fetchContacts,
    addContact,
    deleteContact,
};