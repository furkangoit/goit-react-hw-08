import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div>
            <label htmlFor="filter">Find contacts by name</label>
            <input
                id="filter"
                type="text"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;