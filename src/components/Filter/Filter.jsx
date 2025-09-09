import SearchBox from "../SearchBox/SearchBox";
import styles from "./Filter.module.css";

const Filter = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Filter Contacts</h2>
            <SearchBox />
        </div>
    );
};

export default Filter;