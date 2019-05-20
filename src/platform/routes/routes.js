import React from "react";
import { Route, Switch } from "react-router-dom";
// Feature imports
import Users from "../../core/components/users";
// Layout import
import MainLayout from "../shared/layout/MainLayout";

const PrivateRoutes = props => {
  const mainRoutes = [
    {
      path: "/users",
      main: Users,
    },
  ];

  return (
    <MainLayout {...props}>
      <Switch>
        {mainRoutes.map((route, index) => {
          return <Route key={index} component={route.main} path={route.path} />;
        })}
      </Switch>
    </MainLayout>
  );
};

export default PrivateRoutes;
