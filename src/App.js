import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Covid from "./components/Covid";
import Weather from "./components/Weather";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav className="navbar-container">
        <ul className="navbar">
          <Link className="navbar-item" exact to="/">HOME</Link>
          <Link className="navbar-item" to="/covid">COVID 19</Link>
          <Link className="navbar-item" to="/weather">WEATHER</Link>
          </ul>
      </nav>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/covid" component={Covid} />
        <Route path="/weather" component={Weather} />

      </Switch>
      <footer></footer>
    </div>
  );
}

export default App;