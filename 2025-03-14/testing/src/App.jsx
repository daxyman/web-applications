import { useState } from "react";
import avatar from "./images/user.png";
import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (514) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact(prevContact => {
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    })
    
    // setContact(prevContact => {
    //   return Object.assign({}, prevContact, {
    //     isFavorite: !prevContact.isFavorite
    //   });
    // });
  }
  
  

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={"Photo de profil de "+contact.firstName+" "+contact.lastName}
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={false}
            className="favorite-button"
          >
            <img src={contact.isFavorite ? starFilled : starEmpty} alt="icône étoile vide" className="favorite" />
          </button>
          <h2 className="name">{contact.firstName} {contact.lastName}</h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
