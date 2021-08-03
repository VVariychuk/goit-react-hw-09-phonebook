import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
    const dispatch = useDispatch();

    const value = useSelector(phonebookSelectors.getFilter);

    return (
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={(e)=> dispatch(changeFilter(e.target.value))}/>
        </label>
    )    
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func
};
