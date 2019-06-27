import React, { Suspense, useState } from "react";
import { AppContextProvider } from "contexts/app";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { LayoutPublic } from "application/layout";
import { Menu, findMenuByPath } from "components";
import { publicMenus } from "application/pages";

import HomeConfig from "pages/home/home.config";
import FavoritesConfig from "pages/favorites/favorites.config";
import AboutConfig from "pages/about/about.config";
import DetailsConfig from "pages/detail/detail.config";

const Application = ({ history, location }) => {
  const [activeMenuKey, setActiveMenuKey] = useState([
    findMenuByPath(location.pathname, publicMenus).key
  ]);
  const onMenuClick = item => {
    history.push(item.path);
  };
  return (
    <AppContextProvider>
      <LayoutPublic
        header={
          <Menu
            menuOptions={{
              theme: "dark",
              mode: "horizontal",
              defaultSelectedKeys: activeMenuKey,
              style: { lineHeight: "64px" }
            }}
            onClickMenu={onMenuClick}
            menus={publicMenus}
          />
        }
        content={
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route {...HomeConfig} />
              <Route {...FavoritesConfig} />
              <Route {...AboutConfig} />
              <Route {...DetailsConfig} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
        }
      />
    </AppContextProvider>
  );
};

export default withRouter(Application);
