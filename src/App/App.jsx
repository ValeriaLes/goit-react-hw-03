import { useState } from "react";

import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";


export default function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([])

  const handleDelete = (id) => {
    setContacts((prevContacts) => prevContacts.filter((prevContact)=> prevContact.id !==id))
  };

  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  

  const handleSubmit = (values) => {
    setContacts((prevContacts) => {
      return [...prevContacts, {...values, id: nanoid()} ]
    })

  }

 

  const filteredElements = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <SearchBox filter={filter} handleChange={handleChange} />
      <ContactList contacts={filteredElements} onDelete={handleDelete} />
    </>
  );
}
