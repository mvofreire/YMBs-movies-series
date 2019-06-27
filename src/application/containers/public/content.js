import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { publicPages } from "application/pages";

export const Content = _ => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {publicPages.map((page, i) => (
        <Route key={`public-page-${i}`} {...page} />
      ))}
    </Switch>
  </Suspense>
);
