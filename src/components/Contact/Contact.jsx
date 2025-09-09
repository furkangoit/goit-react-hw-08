import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <li>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button onClick={handleDelete} type="button">
                Delete
            </button>
        </li>
    );
};

export default Contact;