import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors"; // Doğru yol: 3 seviye yukarı

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
    );
};

export default Navigation;