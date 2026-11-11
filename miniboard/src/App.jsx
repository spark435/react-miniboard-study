import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Miniboard Home</h1>
          <p>
            This website allows you to read message board posts and comments.
          </p>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
