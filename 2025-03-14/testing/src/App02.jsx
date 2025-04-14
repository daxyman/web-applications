export default function App02() {
  function handleClick() {
    console.log("J'ai été cliqué!");
  }

  return (
    <div className="container">
      <img src="https://picsum.photos/640/360" />
      <button onMouseOver={handleClick}>Bouton</button>
    </div>
  );
}
