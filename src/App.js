import { Link, Switch, Route } from "react-router-dom";
import GamesPage from "./Components/GamesPage";
import GamesForm from "./Components/GamesForm";
import "./App.css";

function App() {
  return (
    <div className="ui container">
      <div className="ui three item menu">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/games">
          Games
        </Link>
        <Link className="item" to="/games/new">
          Add New Games
        </Link>
      </div>
      <Switch>
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GamesForm} />
        <Route exact path="/game/:_id" component={GamesForm} />
      </Switch>
    </div>
  );
}

export default App;
