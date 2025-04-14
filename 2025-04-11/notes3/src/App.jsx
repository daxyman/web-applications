import padsData from "./assets/pads";
import { useState } from "react";
import Pad from "./components/Pad";

export default function App() {
  const [pads, setPads] = useState(padsData);

  const buttonElements = pads.map((pad) => (
    <Pad id={pad.id} color={pad.color} on={pad.on}/>
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
