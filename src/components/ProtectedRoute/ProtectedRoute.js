
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  React.useEffect(() => {
    if (!props.loggedIn && !localStorage.getItem("jwt")) {
      props.openLoginPopup();
    }
  });

  return (
    <Route>
      {
        props.loggedIn || localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
  )
};

export default ProtectedRoute;



