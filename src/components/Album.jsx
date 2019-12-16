import React, { useState, useEffect } from 'react'
import './Artist.scss'

function Album({ props, callback }) {
  let [rate, setRate] = useState([])

  const openAlbums = () => {
    callback(props.id)
  }

  return (
    <div className='artist' onClick={openAlbums}>
      <div className='picture'>
        {props.images.length > 0 && (
          <img src={props.images[0].url} />
        )}
      </div>

      <div className='details'>
        <div className='text'>
          <h2>{props.name}</h2>
        </div>

      </div>

    </div>
  )
}

export default Album
