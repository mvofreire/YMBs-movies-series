import React from "react";
const HomePage = React.lazy(() => import("./Home"));

export default {
  exact: true,
  key: "home",
  label: "Home",
  path: "/home",
  component: HomePage
};
