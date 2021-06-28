import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Test - Vijay Murukesan</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <DetailsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
