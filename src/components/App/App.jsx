import { useEffect, useState } from "react";

import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";
import css from "./App.module.css"


export default function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts'))?? [])

  const handleDelete = (id) => {
    setContacts((prevContacts) => prevContacts.filter((prevContact)=> prevContact.id !==id))
  };

  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  

  const handleSubmit = (values) => {
 
     
    setContacts((prevContacts) => {
      return [...prevContacts, {...values, id: nanoid()}]})
   

  }

  useEffect(()=> {

    localStorage.setItem('contacts', JSON.stringify(contacts))

  }, [contacts])

 

  const filteredElements = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <SearchBox filter={filter} handleChange={handleChange} />
      <ContactList contacts={filteredElements} onDelete={handleDelete} />
    </div>
  );
}
