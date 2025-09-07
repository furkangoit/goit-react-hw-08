import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors'; // Doğru yol: 3 seviye yukarı
import { logOut } from '../../../redux/auth/operations'; // Doğru yol: 3 seviye yukarı
import { clearContacts } from '../../../redux/contacts/slice'; // Doğru yol: 3 seviye yukarı

const UserMenu = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logOut());
        dispatch(clearContacts());
    };

    return (
        <div>
            <p>Welcome, {name}!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserMenu;