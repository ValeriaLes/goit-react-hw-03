import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.wrapper}>
      <div>
        <p>
          <IoPersonSharp size={20} className={css.icon} />

          {contact.name}
        </p>

        <p>
          <FaPhoneAlt className={css.icon} />

          {contact.number}
        </p>
      </div>

      <button className={css.deleteBtn} onClick={()=>onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
