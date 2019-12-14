import React, { useState, useEffect } from 'react'

function ArtistSearch() {
  let [token, setToken] = useState(null)
  let [search, setSearch] = useState(null)

  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    setToken(params.get('access_token'))
  }, [])

  useEffect(() => {
    console.log(search)
  }, [search])

  const handleChange = e => {
    setSearch(e.currentTarget.value)
  }

  return (
    <div className="artist-search">
      <h1>Artist search</h1>

      <input placeholder='Search for an artist' onChange={handleChange} />
    </div>
  )
}

export default ArtistSearch
