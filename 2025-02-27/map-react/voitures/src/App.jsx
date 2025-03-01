import "./App.css";
import voitures from "./assets/voitures.js";
import Voiture from "./components/Voiture.jsx";

function App() {
  const voituresElements = voitures.map((voiture) => {
    return <Voiture props={voiture} />;
  });
  return <>{voituresElements}</>;
}
export default App;
