import React, { Component } from 'react'
import { Button } from '@masonite/external-ui-react'
import styled from 'styled-components'
import styles from './App.module.scss'
import 'styles/animations.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0,
    }
  }

  IncrementItem = () => {
    const { clicks } = this.state
    this.setState({ clicks: clicks + 1 })
  }

  DecreaseItem = () => {
    const { clicks } = this.state
    this.setState({ clicks: clicks - 1 })
  }

  render() {
    const { clicks } = this.state
    return (
      <div className={styles.App}>
        <header className="App-header">
          <h1>Test React App</h1>
          <img
            className="App-logo"
            src="https://embed.widencdn.net/img/masonite/d58nubyyup/205px/Masonite_Logo_Stacked_1c_White.png"
            alt="Masonite, open to extraordinary"
          />
          <h2>{clicks}</h2>
          <ButtonGroup>
            <Button variant="light" onClick={this.DecreaseItem}>
              -
            </Button>
            <Button variant="light" onClick={this.IncrementItem}>
              +
            </Button>
          </ButtonGroup>
        </header>
      </div>
    )
  }
}

const ButtonGroup = styled.div`
  & > button + button {
    margin-left: 5px;
  }
`

export default App
