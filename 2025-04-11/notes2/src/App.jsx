import React from "react"
export default function App() {
  const [pads, setPads] = React.useState(padsData)
  const styles = {
      backgroundColor: "red"
  }
  const buttonElements = pads.map(pad => (
      <button style={styles} key={pad.id}></button>
  ))
  
  return (
      <main>
          <div className="pad-container">
              {buttonElements}
          </div>
      </main>
  )
}