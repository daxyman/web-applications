import { useState } from "react";

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];

  const thingsElements = myFavoriteThings.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  function addFavoriteThing() {
    
    
    // running this one adds a "test" text instead of an item from allMyFavoriteThings

    // setMyFavoriteThings(prevMyFavoriteThings => [...prevMyFavoriteThings, "test"])
    
    
    if (myFavoriteThings.length < allFavoriteThings.length) {
      setMyFavoriteThings([...myFavoriteThings, allFavoriteThings[myFavoriteThings.length]]);
    }



    // alternative way of doing it, using an extra constant

    // if (myFavoriteThings.length < allFavoriteThings.length) {
    //   const nextThing = allFavoriteThings[myFavoriteThings.length];
    //   setMyFavoriteThings([...myFavoriteThings, nextThing]);
    // }
  }
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
