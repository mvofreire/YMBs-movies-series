import data from "./data.json";
import moment from "moment";
import request from "utils/request";

const compareOrderReleased = (a, b) => {
  if (moment(b.released).isAfter(a.released)) {
    return 1;
  } else if (moment(b.released).isBefore(a.released)) {
    return -1;
  }
  return 0;
};

export const getGreatestMovie = async () => {
  const data = await getListMovies();
  return Promise.resolve(data[0]);
};

export const getGreatestSerie = async () => {
  const data = await getListSeries();
  return Promise.resolve(data[0]);
};

export const getListMovies = (orderByRelease = false) => {
  return getData(x => x.type === "movie", orderByRelease);
};

export const getListSeries = (orderByRelease = false) => {
  return getData(x => x.type === "serie", orderByRelease);
};

export const getFavoriteMovies = (orderByRelease = false, favorites = []) => {
  return getData(
    x => x.type === "movie" && favorites.indexOf(x.id) > -1,
    orderByRelease
  );
};

export const getFavoriteSeries = (orderByRelease = false, favorites = []) => {
  return getData(
    x => x.type === "serie" && favorites.indexOf(x.id) > -1,
    orderByRelease
  );
};

export const getData = (filter, order = false) => {
  let filteredData = data.filter(filter);
  if (order) {
    filteredData = filteredData.sort(compareOrderReleased);
  }
  return Promise.resolve(filteredData);
};

export const loadDetail = id => {
  return request.get(`/`, {
    i: id
  }).then(x=>x.data);
};
