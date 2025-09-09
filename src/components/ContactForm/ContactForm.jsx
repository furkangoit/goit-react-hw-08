import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name,
            number,
        };

        dispatch(addContact(newContact));
        setName("");
        setNumber("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                required
            />
            <input
                type="tel"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={styles.input}
                required
            />
            <button type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;