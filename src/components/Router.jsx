import React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom'
import history from '../history.js'
import ArtistSearch from '../views/ArtistSearch'
import Login from '../views/Login'

history.listen(() => {
  window.scrollTo(0, 0)
})

export default function Router() {
  return (
    <ReactRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/artist-search" render={() => <ArtistSearch />} />
      </Switch>
    </ReactRouter>
  )
}
