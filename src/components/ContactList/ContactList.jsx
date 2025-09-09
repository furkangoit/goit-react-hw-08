import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

const ContactList = () => {
    const filter = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts);

    const getFilteredContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const filteredContacts = getFilteredContacts();

    if (filteredContacts.length === 0) {
        return (
            <div className={styles.container}>
                <p className={styles.noContacts}>No contacts found</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {filteredContacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;