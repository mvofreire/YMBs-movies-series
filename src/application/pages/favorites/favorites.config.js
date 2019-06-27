import React from "react";
const Page = React.lazy(() => import("./Favorites"));

export default {
  exact: true,
  key: "favorites",
  label: "Favorites",
  path: "/favorites",
  component: Page
};
