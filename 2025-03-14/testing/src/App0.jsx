import { useState } from "react"
export default function App0() {
    let [val, setVal] = useState("Oui")
    
    function handleClick() {
        // val = "Bien sûr"
        // console.log(val)
        setVal("Bien sûr")
    }
    
    return (
        <main>
            <h1 className="title">Est-il important de connaître les states?</h1>
            <button onClick={handleClick} className="value">{val}</button>
        </main>
    )
}