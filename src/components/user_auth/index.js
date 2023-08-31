import React from "react";
import React  from "react-router-dom";
import "./index.css";
// import { AppContext } from "../../contexts/app_context";
import { Link } from "react-router-dom";
import { logOutForm } from "../../utilities/user-functions";

const UserAuth = () => {
  const { user, setUser } = useContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    setUser(false);
    navigate("/home");
  };

  return (
    <div className="user-auth">
      {user ? (
        <div>{`Logged in as: ${user.username}`}</div>
      ) : (
        <div>Browsing as Guest</div>
      )}
      {user ? (
        <div className="auth-btns">
          <Link to="/profilepage">
            <button>View Profile</button>
          </Link>
          <p>or</p>
          <Link to="/home">
            <button onClick={handleLogout}>Log Out</button>
          </Link>
        </div>
      ) : (
        <div className="auth-btns">
          <Link to="/components/signup_form">
            <button>Sign Up</button>
          </Link>
          <p>or</p>
          <Link to="/components/login_form">
            <button>Log In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAuth;