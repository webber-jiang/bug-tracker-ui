import React from "react";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log(loginWithRedirect);

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={(): any => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <button onClick={(): any => logout()}>Log out</button>
      )}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default Navbar;
