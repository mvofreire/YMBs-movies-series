import React, { useEffect, useState } from "react";
import { Banner } from "components";
import { withRouter } from "react-router-dom";
import { getGreatestMovie, getGreatestSerie } from "services/movies-series";

export const HomeBanner = withRouter(({ history }) => {
  const [banners, setBanners] = useState([]);
  const loadBanners = async () => {
    const movieTop1 = await getGreatestMovie();
    const serieTop1 = await getGreatestSerie();
    setBanners([movieTop1, serieTop1]);
  };

  useEffect(() => {
    loadBanners();
  }, []);

  return (
    <Banner
      banners={banners}
      onClickBanner={banner => {
        history.push(`/detail/${banner.id}`);
      }}
    />
  );
});
