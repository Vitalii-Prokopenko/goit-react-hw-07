import { useDispatch, useSelector } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { getContacts, getNameFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../contact/Contact";
import css from "./contactlist.module.css";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getNameFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // const updatedContacts = contacts.filter((contact) => contact.id !== id);
    // dispatch(deleteContact(updatedContacts));
    dispatch(deleteContact(id));
  };

  const contactsToList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {contactsToList.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
