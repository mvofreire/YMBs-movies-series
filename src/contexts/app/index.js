import React, { PureComponent } from "react";
import { getListMovies, getListSeries } from "services/movies-series";
import Storage from "utils/storage";
const AppContext = React.createContext();

export const TYPES = {
  MOVIE: "movie",
  SERIE: "serie"
};

export const VIEW_MODES = {
  LIST: "list",
  GRID: "grid"
};

export const normalizeFavorites = (list, favorites) =>
  list.map(item => ({ ...item, isFavorite: favorites.indexOf(item.id) > -1 }));

class AppContextProvider extends PureComponent {
  state = {
    viewType: TYPES.MOVIE,
    viewMode: VIEW_MODES.LIST,
    orderByRelease: false,
    isLoading: false,

    visibleDetail: false,
    itemDetail: {},

    data: [],
    favorites: []
  };

  setData = data => {
    this.setState({ data: normalizeFavorites(data, this.state.favorites) });
  };

  setFavorites = favorites => this.setState({ favorites });

  setType = (viewType, cb) => {
    this.setState({ viewType }, cb);
  };

  setOrder = (orderByRelease, cb) => {
    this.setState({ orderByRelease }, cb);
  };

  changeViewMode = mode => {
    this.setState({ viewMode: mode });
  };

  toggleFavorite = (id, cb = null) => {
    const { data, favorites } = this.state;
    const index = favorites.indexOf(id);

    let addFavorite = !(index > -1);
    if (!addFavorite) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }

    const _data = normalizeFavorites(data, favorites);
    this.setState({ data: _data, favorites }, () => {
      Storage.set("favorites", favorites);
      cb && cb(addFavorite);
    });
  };

  toggleDetailFavorite = () => {
    const { itemDetail } = this.state;
    this.toggleFavorite(itemDetail.id, isFavorite => {
      this.setState({
        itemDetail: {
          ...itemDetail,
          isFavorite
        }
      });
    });
  };

  onClickItem = item => {
    this.setState({ itemDetail: item, visibleDetail: true });
  };

  closeDetails = () => {
    this.setState({ visibleDetail: false, itemDetail: {} });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setData: this.setData,
          setFavorites: this.setFavorites,
          setType: this.setType,
          setOrder: this.setOrder,

          toggleDetailFavorite: this.toggleDetailFavorite,
          toggleFavorite: this.toggleFavorite,

          changeViewMode: this.changeViewMode,
          onClickItem: this.onClickItem,
          closeDetails: this.closeDetails
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
