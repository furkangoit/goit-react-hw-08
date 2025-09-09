import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Your Contacts</h2>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Add New Contact</h3>
                <ContactForm />
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Search Contacts</h3>
                <SearchBox />
            </div>

            <div className={styles.section}>
                <ContactList />
            </div>
        </div>
    );
};

export default ContactsPage;