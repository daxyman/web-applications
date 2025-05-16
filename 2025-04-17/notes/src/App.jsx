// import React from "react"

// export default function App(props) {
//   const [starWarsData, setStarWarsData] = React.useState(null)

//   fetch("https://swapi.dev/api/people/1")
//     .then(res => res.json())
//     .then(data => console.log(data))

//   return (
//     <div>
//       <pre>{JSON.stringify({ name: "Luke" }, null, 2)}</pre>
//     </div>
//   )
// }


import React from "react"

export default function App() {
  const [pokemonData, setPokemonData] = React.useState(null)
  const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [count])

  return (
    <div>
      {pokemonData ? (<img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>) : <p>chargement</p>}
      <h2>Le numéro est {count}</h2>
      {pokemonData ? <h1>le pokemon est {pokemonData.name}</h1> : <p>chargement</p>}
      <button onClick={() => setCount(prev => prev + 1)}>Afficher le prochain Pokémon</button>
      <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
    </div>
  )
}
// c.r.u.d
/*
create    --> post()
read      --> get()
update    -->
delete    -->
*/
