import { useState } from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (514) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="Photo de profil de John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starEmpty}
                            alt="icône étoile vide"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        John Doe
                    </h2>
                    <p className="contact">+1 (212) 555-1212</p>
                    <p className="contact">itsmyrealname@example.com</p>
                </div>

            </article>
        </main>
    )
}