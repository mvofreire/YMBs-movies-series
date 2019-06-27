import React from "react";
import { shape } from "prop-types";
import ReactDOM from "react-dom";
import Home from "./Home";
import { shallow, mount } from "enzyme";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {}
  }
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) }
});

function mountWrap(node) {
  return mount(node, createContext());
}

function shallowWrap(node) {
  return shallow(node, createContext());
}

describe("HomePage", () => {
  //   it("Render with no error", () => {
  //     const div = document.createElement("div");
  //     ReactDOM.render(<Home />, div);
  //   });

  it("Wrapper must match snapshot ", () => {
    const wrapper = shallowWrap(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
