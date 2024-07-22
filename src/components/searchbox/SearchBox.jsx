import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlise";
import { selectNameFilter } from "../../redux/selectors";
import css from "./searchbox.module.css";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterField}
        type="text"
        name="filter"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
