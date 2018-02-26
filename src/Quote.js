import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    axios.get(`https://ricordati-che-devi-morire.firebaseio.com/quotes/${props.id}.json`).then(({ data }) => {
      this.setState({
        ...data
      })
    })
  }
  render () {
    return (
      <figure>
        <blockquote>
          <p>
            {this.state.quote}
          </p>
          <footer>
            <cite>
              — {this.state.cite}
            </cite>
          </footer>
        </blockquote>
      </figure>
    )
  }
}

export default App
