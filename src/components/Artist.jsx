import React from 'react'

function Artist({ props }) {
  return (
    <div className='artist'>
      {props.images.length > 0 && (
        <img src={props.images[0].url} style={{height:150}} />
      )}
      <p>{props.name}</p>
      <p>Popularity: {Math.floor(props.popularity/20)}</p>
      <p>Followers: {props.followers.total}</p>
      <p>Id: {props.id}</p>
    </div>
  )
}

export default Artist
