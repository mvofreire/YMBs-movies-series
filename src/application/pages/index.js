import HomeConfig from "./home/home.config";
import FavoritesPageConfig from "./favorites/favorites.config";
import DetailPageConfig from "./detail/detail.config";
import AboutPageConfig from "./about/about.config";

const pagesRoutes = [
  HomeConfig,
  FavoritesPageConfig,
  AboutPageConfig,
  DetailPageConfig
];

export const publicPages = pagesRoutes.filter(page => !page.auth);
export const publicMenus = publicPages.filter(
  page => !!page.label && !!page.path
);

export const privatePages = pagesRoutes.filter(page => !!page.auth);
export const privateMenus = privatePages.filter(
  page => !!page.label && !!page.path
);
