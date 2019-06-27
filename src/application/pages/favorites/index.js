import React from "react";
import { FavoritesContext } from "contexts/favorites";
import Page from "./Favorites";

export default props => (
  <FavoritesContext.Consumer>
    {ctxProps => <Page {...props} {...ctxProps} />}
  </FavoritesContext.Consumer>
);
