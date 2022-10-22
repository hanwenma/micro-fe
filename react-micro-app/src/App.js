import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const Home = () => <h1 className="home-text">This Is Home Page!!!</h1>
const About = () => <h1 className="about-text">This Is About Page!!!</h1>

function App() {
  return (
    <Router>
      <div className="App">

        <h1>react-micro-app 子应用</h1>

        {/* 导航 */}
        <nav style={{ margin: 20 }}>
          <Link to="/">Home</Link>
          <span style={{ margin: 10 }}>|</span>
          <Link to="/about">About</Link>
        </nav>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* 匹配的路由 */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
