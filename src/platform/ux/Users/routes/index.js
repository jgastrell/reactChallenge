import React from "react";
import { Route } from "react-router-dom";

import UsersLoader from "../../../../core/components/users";

// Feature level subroutes
const UserRoutes = props => {
  const { path } = props.match;
  return (
    <div>
      <Route exact path={`${path}`} render={() => <UsersLoader />} />
    </div>
  );
};

export default UserRoutes;
