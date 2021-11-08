import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";

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
            <Route exact path="/Profile">
              <Profile/>
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
