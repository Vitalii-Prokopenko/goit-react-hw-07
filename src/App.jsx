import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { getContacts, getIsLoading, getError } from "./redux/selectors";
import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errormessage/ErrorMessage";

function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {contacts.length > 0 && <ContactList style={{ width: "100%" }} />}
    </div>
  );
}

export default App;
