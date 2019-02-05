import React, { Component } from 'react'
import { Button } from '@masonite/external-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from './App.module.scss'
import history from './history'

function BasicExample() {
  return (
    <Router basename="/test-react-app" history={history}>
      <div className={styles.App}>
        <div className="AppHeader">
          <img
            className="AppLogo"
            src="https://embed.widencdn.net/img/masonite/d58nubyyup/205px/Masonite_Logo_Stacked_1c_White.png"
            alt="Masonite, open to extraordinary"
          />
          <ul>
            <li>
              <Link to="/">
                <span className="AppLink">Home</span>
              </Link>
            </li>
            <li className={styles.AppLink}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles.AppLink}>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the home page.</p>
      <img
        src="https://embed.widencdn.net/img/masonite/ojau4qki5h/300x300px/BLC-106-129-528-1-bty.jpeg"
        alt=""
      />
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
      <Button variant="light" onClick={() => alert('clicked')}>
        Click Me
      </Button>
    </div>
  )
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <p>This is the topics page.</p>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </div>
  )
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     clicks: 0,
  //   }
  // }
  // IncrementItem = () => {
  //   const { clicks } = this.state
  //   this.setState({ clicks: clicks + 1 })
  // }
  // DecreaseItem = () => {
  //   const { clicks } = this.state
  //   this.setState({ clicks: clicks - 1 })
  // }
  // render() {
  //   const { clicks } = this.state
  //   return (
  //     <div className={styles.App}>
  //       <header className="App-header">
  //         <h1>Test React App</h1>
  //         <img
  //           className="App-logo"
  //           src="https://embed.widencdn.net/img/masonite/d58nubyyup/205px/Masonite_Logo_Stacked_1c_White.png"
  //           alt="Masonite, open to extraordinary"
  //         />
  //         <h2>{clicks}</h2>
  //         <ButtonGroup>
  //           <Button variant="light" onClick={this.DecreaseItem}>
  //             -
  //           </Button>
  //           <Button variant="light" onClick={this.IncrementItem}>
  //             +
  //           </Button>
  //         </ButtonGroup>
  //       </header>
  //     </div>
  //   )
  // }
}

export default BasicExample
