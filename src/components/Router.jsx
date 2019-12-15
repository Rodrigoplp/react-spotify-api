import React, { useState } from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom'
import history from '../history.js'
import ArtistSearch from '../views/ArtistSearch'
import Login from '../views/Login'
import Albums from '../views/Albums'

history.listen(() => {
  window.scrollTo(0, 0)
})

export default function Router() {
  let [artistId, setArtistId] = useState(null)
  let [searchTerm, setSearchTerm] = useState(null)

  let idCallback = id => {
    setArtistId(id)
  }

  let termCallback = term => {
    setSearchTerm(term)
  }

  let artistProps = {
    idCb: idCallback,
    searchCb: termCallback,
    searchTerm: searchTerm
  }

  return (
    <ReactRouter history={history}>
      <Switch>
        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/artist-search' render={() => <ArtistSearch props={artistProps} />} />
        <Route exact path='/albums' render={() => <Albums props={artistId} />} />
      </Switch>
    </ReactRouter>
  )
}
