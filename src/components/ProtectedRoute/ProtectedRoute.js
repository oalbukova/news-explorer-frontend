// import React from "react";
// import { Route, Redirect } from "react-router-dom";
//
// const ProtectedRoute = ({ component: Component, ...props }) => {
//   React.useEffect(() => {
//     if (!props.loggedIn && !localStorage.getItem("loggedIn")) {
//       props.onLoginOpen()
//     }
//   });
//
//   return (
//     <Route>
//       {() =>
//         props.loggedIn || localStorage.getItem("loggedIn") ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="./" />
//         )
//       }
//     </Route>
//   );
// };
//
// export default ProtectedRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  React.useEffect(() => {
    if (!props.loggedIn ) {
      props.onLoginOpen()
    }
  });

  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./"  />
      }
    </Route>
  )}

export default ProtectedRoute;