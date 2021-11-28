import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Authenication/Login"
import Forgot from "./pages/Authenication/ForgotPassword"
import SignUp from "./pages/Authenication/Signup"

import PrivateRoute from "./PrivateRoute";

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Forgot" component={Forgot} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
