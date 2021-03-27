import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import GamesPage from "./Components/GamesPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="games">Games</Link>

        <Switch>
          <Route exact path="/games" component={GamesPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
