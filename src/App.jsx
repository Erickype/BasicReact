import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vite + React app</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 2)}>
            count is: {count}
          </button>
        </p>
        <p>
          Running the app again!!
        </p>
        <p>
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://animeflv.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Animeflv
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
