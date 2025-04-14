import {useState} from "react"

export default function Exo1() {
    const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
    
    return (
        <div>
            <h1>Vous avez {unreadMessages.length} messages non lus!</h1>
        </div>
    )
}
