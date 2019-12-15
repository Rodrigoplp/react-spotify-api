import React, { useState, useEffect } from 'react'
// import Star from './Star.jsx'
import './Artist.scss'

const star = (
  <svg width="497" height="473" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <g>
      <title>Layer 1</title>
      <polygon stroke="#b6b6b6" points="248.63946533203125,2.5 309.48846435546875,177.55484008789062 494.77880859375,181.33078002929688 347.09527587890625,293.2965545654297 400.761962890625,470.68504333496094 248.63946533203125,364.82884216308594 96.51692199707031,470.68504333496094 150.18370056152344,293.2965545654297 2.5,181.33078002929688 187.7904052734375,177.55484008789062 248.63946533203125,2.5 309.48846435546875,177.55484008789062 " strokeWidth="20" strokecolor="#000000" fill="#d7d7d7" orient="point" r2="47.37444" r="118.43611" point="5" shape="star" id="svg_1" cy="137.5" cx="221"/>
    </g>
  </svg>
)

function Artist({ props }) {
  let [rate, setRate] = useState([])

  useEffect(() => {
    let stars = []
    for (let i=0; i<Math.floor(props.popularity/20); i++) {
      stars.push(star)
    }

    setRate(stars)
  }, [props])

  return (
    <div className='artist'>
      <div className='picture'>
        {props.images.length > 0 && (
          <img src={props.images[0].url} />
        )}
      </div>

      <div className='details'>
        <div className='text'>
          <h2>{props.name}</h2>
          <p>{props.followers.total.toLocaleString()} followers</p>
        </div>

        <div className='rate'>
          {rate}
        </div>

      </div>

    </div>
  )
}

export default Artist
