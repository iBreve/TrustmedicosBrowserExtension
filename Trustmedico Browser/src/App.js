import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import List from "./pages/List"
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/Home">
              <Home/>
            </Route>
            <Route exact path="/Lists">
              <List/>
            </Route>
            <Route exact path="/Login">
              <Login/>
            </Route>
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
