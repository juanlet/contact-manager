import React,{Fragment, useContext} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if(contacts.length === 0){
        return <h4>Please add a contact</h4>
    }

    const loopOver = filtered || contacts;

    return (
        <Fragment>
            <TransitionGroup>
             {loopOver.map(contact => (
             <CSSTransition key={contact.id} timeout={1000} classNames="item">
             <ContactItem contact={contact} />
             </CSSTransition>
             ))}
             </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
