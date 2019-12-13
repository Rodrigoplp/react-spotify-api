import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let [token, setToken] = useState(null)

  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    setToken(params.get('access_token'))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a href='http://localhost:8888/login' className='App-link'> Login to Spotify </a>

        <p>{token}</p>
      </header>
    </div>
  )
}

export default App
