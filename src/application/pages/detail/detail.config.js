import React from "react";
const Page = React.lazy(() => import("./Detail"));

export default {
  key: "detail",
  path: "/detail/:id",
  component: Page
};
