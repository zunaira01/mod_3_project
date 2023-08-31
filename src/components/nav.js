import { Link } from "react-router-dom";

 function Nav (props){
  return (
    <div className="nav">
      <nav>
        <button className="b1"><Link to="/loginform">LOGIN</Link></button>
        <button><Link to="/signupform">REGISTER</Link></button>
      </nav>
    </div>
  );
};

export default Nav;

