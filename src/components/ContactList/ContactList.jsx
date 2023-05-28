import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, getLoadingStatus, getErrorStatus } from '../../redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/action';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filterState = useSelector(getFilter);
    const isLoading = useSelector(getLoadingStatus);
    const error = useSelector(getErrorStatus);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const removeContact = id => dispatch(deleteContact(id));

    const getFilterNormalize = () => filterState.toLowerCase();
    
    const getFilteredContacts = () =>
        contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(getFilterNormalize())
        );

    return (
        <Contacts>
            {
                (error && <b>{error}</b>) || 
                (isLoading && <b>Please wait, loading is in progress...</b>) ||
                getFilteredContacts().map(({ id, name, number }) => (
                    <ContactItem
                        name={name}
                        key={id}
                        id={id}
                        number={number}
                        deleteContact={removeContact}
                    />
                ))
            }
        </Contacts>
    )
};