import React, { Fragment } from "react";
import { HomeBanner } from "./components";
import { ListEntertainment } from "components";
import { Divider } from "antd";
import { HomeContext, HomeContextProvider } from "contexts/home";

const Home = ({ data }) => (
  <HomeContextProvider>
    <HomeBanner />
    <Divider />
    <HomeContext.Consumer>
      {props => <ListEntertainment {...props} />}
    </HomeContext.Consumer>
  </HomeContextProvider>
);

export default Home;
