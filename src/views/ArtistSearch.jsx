import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Artist from '../components/Artist'
import history from '../history.js'
import './ArtistSearch.scss'

const spotifyApi = new SpotifyWebApi()

function ArtistSearch({ props }) {
  let [search, setSearch] = useState(null)
  let [artists, setArtists] = useState(null)
  let [token, setToken] = useState(null)

  // Retrieve access token from url
  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const token = params.get('access_token')

    setToken(token)
    spotifyApi.setAccessToken(token)
  }, [])

  // Search artists
  useEffect(() => {
    if (search && search.length > 2) {
      spotifyApi.searchArtists(search)
        .then(function(data) {
          setArtists(data.artists.items)
        }, function(err) {
          console.error(err);
        })
    }
  }, [search])

  // Load search term from props
  useEffect(() => {
    setSearch(props.searchTerm)
  }, [props.searchTerm])

  // Save token in Router state
  useEffect(() => {
    props.tokenCb(token)
  }, [props, token])

  // Save search term
  const handleChange = e => {
    setSearch(e.currentTarget.value)
    props.searchCb(e.currentTarget.value)
  }

  // Save artist id in Router state
  const albumsCallback = id => {
    props.idCb(id)
    history.push('/albums')
  }

  return (
    <div className="spotify">
      <h1>Artist search</h1>

      <input placeholder='Search for an artist' onChange={handleChange} />

      {artists && (
        <div className='artists'>
          <ul className='list'>
            {artists.map((artist, index) => (
              <li className='list-item' key={index}>
                <Artist props={artist} callback={albumsCallback} />
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  )
}

export default ArtistSearch
