import React, { useState, useEffect } from 'react'

function ArtistSearch() {
  let [token, setToken] = useState(null)

  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    setToken(params.get('access_token'))
  }, [])

  return (
    <div className="artist-search">
      <h1>Artist search</h1>

      <p>{token}</p>
    </div>
  )
}

export default ArtistSearch
