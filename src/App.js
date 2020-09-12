import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false
    }
  }

  componentDidMount() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'))
    this.setState((prevState) => {
      return { darkMode: darkMode }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const darkMode = JSON.stringify(this.state.darkMode)
    localStorage.setItem('darkMode', darkMode)
  }

  onChange = () => {
    this.setState((prevState) => {
      return { darkMode: !prevState.darkMode }
    })
  }

  render() {
    return (
      <Router>
        <div className={this.state.darkMode ? "dark-mode" : "normal-mode"}>
          <nav style={{ marginBottom: '1.5rem', backgroundColor: this.state.darkMode ? '#0A5C3B' : '#1ae895', height: '7rem' }}>
            <div className="custom-control custom-switch" style={{ textAlign: 'right', paddingRight: '1.5rem', paddingTop: '0.5rem' }}>
              <span>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  checked={this.state.darkMode}
                  onChange={this.onChange} />
                <label className="custom-control-label" htmlFor="customSwitch1"></label>
              </span>
              <span style={{ color: this.state.darkMode ? '#fffc38' : '#adb5bd' }}><i className="fas fa-moon"></i></span>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>
              Test
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to='/test-2' style={{ color: this.state.darkMode ? '#dff0e9' : '#347deb' }}>Home</Link> | <Link to='/test-2/ex1' style={{ color: this.state.darkMode ? '#dff0e9' : '#347deb' }}>EX 1</Link> | <Link to='/test-2/ex2' style={{ color: this.state.darkMode ? '#dff0e9' : '#347deb' }}>EX 2</Link>
            </div>
          </nav>
          <Route exact path='/test-2' render={props => (
            <Home state={this.state} />
          )} />
          <Route path='/test-2/ex1' render={props => (
            <Ex1 state={this.state} />
          )} />
          <Route path='/test-2/ex2' render={props => (
            <Ex2 state={this.state} />
          )} />
          <main>
            <div style={{ textAlign: "center" }}>
              You Are Currently On {this.state.darkMode ? '"Dark Mode"' : '"Normal Mode"'}
            </div>
            <div style={{ textAlign: "center" }}>
              Use The Switch At The Top To Change To Dark Mode Or Normal Mode
            </div>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
