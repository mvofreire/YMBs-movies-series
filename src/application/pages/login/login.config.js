import React from "react";
const LoginPage = React.lazy(() => import("."));

export default {
  key: "login",
  path: "/entrar",
  label: "Entrar",
  component: LoginPage
};
