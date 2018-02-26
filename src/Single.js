import React, { Component } from 'react'
import Quote from './Quote'
import PrivacyPolicy from './PrivacyPolicy';

class App extends Component {
  render () {
    return (
      <div className="single">
        <header>
          <h4>
            <a href='/'>Memento Mori</a>
          </h4>
        </header>
        <main className='quote'>
          <Quote id={this.props.match.params.id} />
        </main>
        <PrivacyPolicy />
      </div>
    )
  }
}

export default App
