import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>TrustMedicos</h1>
            <div className="Link">
                <Link to='/Home'>List</Link>
                <Link to='/Login'>Login</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;