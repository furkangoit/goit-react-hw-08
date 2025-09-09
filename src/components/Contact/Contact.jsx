import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <li className={styles.contact}>
            <div className={styles.info}>
                <span className={styles.name}>{contact.name}:</span>
                <span className={styles.number}>{contact.number}</span>
            </div>
            <button
                onClick={handleDelete}
                type="button"
                className={styles.deleteBtn}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;