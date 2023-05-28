import { useState } from 'react';
import { GoPlus, GoX } from "react-icons/go";
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ListTitle, Wrapper, Button } from './ContactsPage.styled';

const ContactsPage = () => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => setToggle(!toggle);;
  
    return (
        <Wrapper>
            <h1>Phonebook</h1>
            {toggle && <ContactForm />}
            <ListTitle>Contacts</ListTitle>
            <Filter />
            <ContactList />
            {toggle ? <Button type="button" onClick={toggleHandler}><GoX></GoX></Button> : <Button type="button" onClick={toggleHandler}><GoPlus></GoPlus></Button>}
        </Wrapper>
    );
};

export default ContactsPage;