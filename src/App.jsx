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
      <p>Number of contacts: {contacts.length}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "10px",
          width: "100%",
        }}
      >
        <ContactForm />
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <SearchBox />
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
          {contacts.length > 0 && <ContactList style={{ width: "100%" }} />}
        </div>
      </div>
    </div>
  );
}

export default App;
