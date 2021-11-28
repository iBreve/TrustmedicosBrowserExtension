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
import { AuthContextProvider, useAuthState} from "./firebase";

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/Login" />
      }
    />
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/Home" />
      }
    />
  )
}

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <UnauthenticatedRoute exact path="/Login" component={Login} />
            <UnauthenticatedRoute exact path="/SignUp" component={SignUp} />
            <UnauthenticatedRoute exact path="/Forgot" component={Forgot} />
            <AuthenticatedRoute exact path="/Home" component={Home} />
            <AuthenticatedRoute exact path="/Profile" component={Profile} />
            <AuthenticatedRoute exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
