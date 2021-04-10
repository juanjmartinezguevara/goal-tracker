import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Agenda from "./components/Agenda";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/agenda" render={(props) => <Agenda />} />
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
