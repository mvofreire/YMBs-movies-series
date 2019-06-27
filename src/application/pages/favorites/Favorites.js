import React, { Fragment } from "react";
import { ListEntertainment } from "components";
import { FavoritesContext, FavoritesContextProvider } from "contexts/favorites";
const FavoritesPage = ({ data }) => (
  <FavoritesContextProvider>
    <FavoritesContext.Consumer>
      {props => <ListEntertainment {...props} />}
    </FavoritesContext.Consumer>
  </FavoritesContextProvider>
);

export default FavoritesPage;
