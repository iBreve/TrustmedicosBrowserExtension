import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Authenication/Login"
import Forgot from "./pages/Authenication/ForgotPassword"
import SignUp from "./pages/Authenication/Signup"

import PrivateRoute from "./PrivateRoute";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/Login">
              <Login/>
            </Route>
            <Route exact path="/SignUp">
              <SignUp/>
            </Route>
            <Route exact path="/Forgot">
              <Forgot/>
            </Route>
            <PrivateRoute exact path="/Home" component={Home} />
            <PrivateRoute exact path="/Profile" component={Profile} />
            <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
