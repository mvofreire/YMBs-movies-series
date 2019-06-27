import React from "react";
import { shape } from "prop-types";
import ReactDOM from "react-dom";
import { ListEntertainment } from ".";
import { shallow, mount } from "enzyme";
import { HomeContext, HomeContextProvider } from "contexts/home";

import ListItem from "./item-list";
import GridItem from "./item-grid";

describe("ListEntertainment", () => {
  const item = {
    id: "tt7366338",
    title: "Chernobyl",
    description: "",
    poster: "",
    year: "2019",
    released: "06 May 2019",
    genre: "Drama, History",
    director: "N/A",
    rating: "9.6",
    time: "330 min",
    type: "serie"
  };
  it("Wrapper must match snapshot ", () => {
    const wrapper = shallow(
      <HomeContextProvider>
        <HomeContext.Consumer>
          {props => <ListEntertainment {...props} />}
        </HomeContext.Consumer>
      </HomeContextProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("Should call callback on click title in ListItem", () => {
    const callback = jest.fn();
    const wrapper = mount(<ListItem item={item} onClickItem={callback} />);
    wrapper.find(".item-title").simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("Should call callback on click toggle Favorite", () => {
    const callback = jest.fn();
    const wrapper = mount(<ListItem item={item} toggleFavorite={callback} />);
    wrapper
      .find(".toggle-favorite")
      .first()
      .simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("Should call callback on click title in ListItem", () => {
    const callback = jest.fn();
    const wrapper = mount(<GridItem item={item} onClickItem={callback} />);
    wrapper.find(".item-title").simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("Should call callback on click toggle Favorite", () => {
    const callback = jest.fn();
    const wrapper = mount(<GridItem item={item} toggleFavorite={callback} />);
    wrapper
      .find(".toggle-favorite")
      .first()
      .simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
