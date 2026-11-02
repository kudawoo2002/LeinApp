import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="containerWrapper">
      <div className="navWrapper">
        <div>
          <Link to="#">LEIN Voice Commons</Link>
        </div>
        <div className="leftMenuWrapper">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/speak">Speak</NavLink>
          <NavLink to="/write">Write</NavLink>
          <NavLink to="/photo">Photos</NavLink>
          <NavLink to="/video">Video</NavLink>
          <NavLink to="/progress">Progress</NavLink>
          <NavLink to="/contribution">My contributions</NavLink>
          <NavLink to="/join" className="btnJoin">
            Join
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
