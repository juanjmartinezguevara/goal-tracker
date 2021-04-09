import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ (props) => <Home/> } />
      </Switch>
      <Navbar/>
    </div>
  );
}

export default App;
