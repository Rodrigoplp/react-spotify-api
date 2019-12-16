import React, { useState, useEffect } from 'react'
import './Album.scss'

function Album({ props, callback }) {
  let [rate, setRate] = useState([])

  const openAlbums = () => {
    callback(props.id)
  }

  return (
    <div className='album' onClick={openAlbums}>
      <div className='picture'>
        {props.images.length > 0 && (
          <img src={props.images[0].url} />
        )}
      </div>

      <div className='details'>
        <div className='top'>
          <div className='title'><h2>{props.name}</h2></div>
          <p>{props.artists[0].name}</p>
        </div>

        <div className='bottom'>
          <p>{props.release_date}</p>
          <p>{props.total_tracks} {props.total_tracks === 1 ? 'track' : 'tracks'}</p>
        </div>

        <button>Preview on Spotify</button>

      </div>

    </div>
  )
}

export default Album
