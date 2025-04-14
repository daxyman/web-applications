import { useState } from "react";

export default function App() {

  function handleClick() {
    setValeur(valeur === "Oui" ? "Non" : "Oui");
  }

  const [valeur, setValeur] = useState("Oui");

  return (
    <main>
      <h1 className="title">Est-ce que je sors ce soir?</h1>
      <button onClick={handleClick} className="value">
        {valeur}
      </button>
    </main>
  );
}
