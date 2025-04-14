import { useState } from "react"
import './App.css'

function App() {
  const user = {
    nom: "Alice",
    age: 25,
    ville: "Montréal",
  };
    
  function handleClick() {
      for(let i=0; i<grille.length; i++){
        console.log(grille[i]);
      }
  }
  
  return (
      <main>
          <h1 onClick={handleClick()}>"check the console"</h1>
      </main>
  )
}

export default App
