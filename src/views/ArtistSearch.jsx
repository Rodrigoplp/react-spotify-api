import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Artist from '../components/Artist'
import history from '../history.js'
import './ArtistSearch.scss'

const spotifyApi = new SpotifyWebApi()

const searchIcon = (
  <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    <g>
      <title>Layer 2</title>
      <circle fillOpacity="0" id="svg_2" r="14.22443" cy="15.72443" cx="15.72443" strokeWidth="3" stroke="#cccccc" fill="#000000"/>
      <line stroke="#cccccc" id="svg_4" y2="30.20002" x2="29.72541" y1="26.64045" x1="26.16584" fillOpacity="0" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="3" fill="none"/>
      <line id="svg_6" y2="29.96271" x2="29.72541" y1="40.64143" x1="40.87873" fillOpacity="0" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="6" stroke="#cccccc" fill="none"/>
    </g>
  </svg>
)

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
    if (search && search.length > 0) {
      spotifyApi.searchArtists(search)
        .then(function(data) {
          setArtists(data.artists.items)
        }, function(err) {
          console.error(err);
        })
    }
    else {
      setArtists(null)
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

      <div className='search-field'>
        <input placeholder='Search for an artist...' onChange={handleChange} />
        {searchIcon}
      </div>

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
