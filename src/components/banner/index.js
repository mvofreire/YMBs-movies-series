import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Image } from "../image";
import { Link } from "react-router-dom";
import config from "config";

const BannerItem = ({ img, onClick }) => {
  return (
    <div
      style={{
        cursor: !!onClick ? "pointer" : "default",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Image src={img} onClick={onClick} />
    </div>
  );
};

export const Banner = ({ banners, onClickBanner }) => (
  <Carousel effect="fade" autoplay dotPosition="bottom">
    {banners.map((banner, i) => (
      <BannerItem
        key={`banner-${i}`}
        id={banner.id}
        onClick={_ => onClickBanner(banner)}
        img={`http://img.omdbapi.com/?apikey=${config.apiKey}&i=${banner.id}`}
      />
    ))}
  </Carousel>
);
