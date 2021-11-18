import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Authenication/Login"
import Forgot from "./pages/Authenication/ForgotPassword"
import SignUp from "./pages/Authenication/Signup"

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
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path="/SignUp">
              <SignUp/>
            </Route>
            <Route exact path="/Forgot">
              <Forgot/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
