import React, { PureComponent } from "react";
import { getListMovies, getListSeries } from "services/movies-series";
import Storage from "utils/storage";
import { AppContext, TYPES, VIEW_MODES } from "contexts/app";

const HomeContext = React.createContext();
class HomeContextProvider extends PureComponent {
  static contextType = AppContext;

  componentDidMount() {
    this.init();
  }

  init = () => {
    const { setType, changeViewMode } = this.context;

    changeViewMode && changeViewMode(VIEW_MODES.LIST);
    setType && setType(TYPES.MOVIE, this.loadData);
  };

  loadData = async () => {
    const { setData, setFavorites, orderByRelease } = this.context;
    const { viewType } = this.context;

    const favorites = Storage.get("favorites") || [];
    const load = viewType === TYPES.MOVIE ? getListMovies : getListSeries;
    const data = await load(orderByRelease);

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

  render() {
    const ctxValues = this.context;
    return (
      <HomeContext.Provider
        value={{
          ...ctxValues,
          changeType: this.changeType,
          changeOrder: this.changeOrder
        }}
      >
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}

export { HomeContext, HomeContextProvider };
