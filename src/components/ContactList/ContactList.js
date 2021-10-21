import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ol className={styles.ContactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          
            {name}: <span className={styles.contact}>{number}</span>
         
          <button
           
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            
          >Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
