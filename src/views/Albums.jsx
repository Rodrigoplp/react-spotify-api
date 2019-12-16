import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Album from '../components/Album'
import './ArtistSearch.scss'

const spotifyApi = new SpotifyWebApi()

function Albums({ props }) {
  let [albums, setAlbums] = useState([])

  spotifyApi.setAccessToken(props.token)

  useEffect(() => {
    spotifyApi.getArtistAlbums(props.id)
      .then(function(data) {
        setAlbums(data.items)
      }, function(err) {
        console.error(err)
      })
  }, [props])

  const detailsCallback = id => {
    console.log('Navigate to', id)
  }

  return (
    <div className='spotify'>
      <h1>Albums</h1>

      {albums && (
        <div className='albums-list'>
          <ul className='list'>
            {albums.map((album, index) => (
              <li className='list-item' key={index}>
                <Album props={album} callback={detailsCallback} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Albums
