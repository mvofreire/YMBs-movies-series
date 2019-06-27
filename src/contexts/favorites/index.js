import React, { PureComponent } from "react";
import { getFavoriteMovies, getFavoriteSeries } from "services/movies-series";
import Storage from "utils/storage";
import { AppContext, TYPES, VIEW_MODES } from "contexts/app";
import FavoritesManager from "utils/favorites";

const FavoritesContext = React.createContext();
class FavoritesContextProvider extends PureComponent {
  static contextType = AppContext;

  componentDidMount() {
    this.init();
    this.favoritesManager = new FavoritesManager();
  }

  init = () => {
    const { setType, changeViewMode } = this.context;

    changeViewMode(VIEW_MODES.LIST);
    setType(TYPES.MOVIE, this.loadData);
  };

  loadData = async () => {
    const { setData, setFavorites, orderByRelease } = this.context;
    const { viewType } = this.context;

    const favorites = this.favoritesManager.getList();
    const load =
      viewType === TYPES.MOVIE ? getFavoriteMovies : getFavoriteSeries;

    const data = await load(orderByRelease, favorites);

    setFavorites(favorites);
    setData(data);
  };

  changeType = type => {
    const { setType } = this.context;

    setType(type, this.loadData);
  };

  changeOrder = order => {
    const { setOrder } = this.context;

    setOrder(order, this.loadData);
  };

  removeFavorite = id => {
    const favorites = Storage.get("favorites") || [];
    const index = favorites.indexOf(id);
    favorites.splice(index, 1);
    Storage.set("favorites", favorites);

    this.loadData();
  };

  removeDetailFavorite = () => {
    const { itemDetail, closeDetails } = this.context;
    this.removeFavorite(itemDetail.id);
    closeDetails();
  };

  render() {
    const ctxValues = this.context;
    return (
      <FavoritesContext.Provider
        value={{
          ...ctxValues,
          changeType: this.changeType,
          changeOrder: this.changeOrder,
          toggleFavorite: this.removeFavorite,
          toggleDetailFavorite: this.removeDetailFavorite
        }}
      >
        {this.props.children}
      </FavoritesContext.Provider>
    );
  }
}

export { FavoritesContext, FavoritesContextProvider };
