import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlise";
import { getNameFilter } from "../../redux/selectors";
import css from "./searchbox.module.css";

const SearchBox = () => {
  const nameFilter = useSelector(getNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterField}
        type="text"
        name="filter"
        value={nameFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
