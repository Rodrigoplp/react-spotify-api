import React from 'react'
import './Album.scss'

function Album({ props }) {
  return (
    <div className='album'>
      <div className='picture'>
        {props.images.length > 0 && (
          <img src={props.images[0].url} alt={props.name}/>
        )}
      </div>

      <div className='details'>
        <div className='top'>
          <div className='title'>
            <h2>{props.name}</h2>
          </div>

          <div className='artists'>
            <ul>
              {props.artists.map((artist, index) => (
                <li key={index}>{artist.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='bottom'>
          <p>{props.release_date}</p>
          <p>{props.total_tracks} {props.total_tracks === 1 ? 'track' : 'tracks'}</p>
        </div>

        <a target='_blank' rel='noopener noreferrer' href={props.external_urls.spotify}>Preview on Spotify</a>

      </div>

    </div>
  )
}

export default Album
