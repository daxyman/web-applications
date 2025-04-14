import  {useState} from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(true)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    let text = isShown ? "hide" : "show"

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3> /* check if props.setup is an empty string or not, then, show prn  */} 
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{text} punchline</button>
            <hr />
        </div>
    )
}



// import {useState} from "react"

// export default function App() {
//     const [unreadMessages, setUnreadMessages] = useState(["a", "b"]) //this is the number of messages
    
//     return (
//         <div>
//             <h1>Vous avez {unreadMessages.length} messages non lus!</h1>
//         </div>
//     )
// }