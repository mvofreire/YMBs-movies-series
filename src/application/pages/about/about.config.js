import React from "react";
const Page = React.lazy(() => import("./About"));

export default {
  key: "about",
  label: "About",
  path: "/about",
  component: Page
};
