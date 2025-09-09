import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={styles.container}>
            <label htmlFor="filter" className={styles.label}>
                Find contacts by name
            </label>
            <input
                id="filter"
                type="text"
                value={filter}
                onChange={handleChange}
                className={styles.input}
                placeholder="Search contacts..."
            />
        </div>
    );
};

export default SearchBox;