import React, { Component, Fragment } from 'react'
import Home from './Home'
import Single from './Single'
import { Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Route path='/:id' component={Single} />
        <Route exact path='/' render={() => {
          this.props.initNotifications();
          return <Home isPushSupported={this.props.isPushSupported} />
        }}  />
      </Fragment>
    )
  }
}

export default App
