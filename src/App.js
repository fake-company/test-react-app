import React, { Component } from 'react'
import { Button } from '@masonite/external-ui-react'
import logo from './logo.svg'
import styles from './App.module.scss'

const handleClick = () => {
  alert('clicked!')
}

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <h1>Test React App</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="light" onClick={handleClick}>
            click me
          </Button>
        </header>
      </div>
    )
  }
}

export default App
