import React from "react";
import ReactDOM from "react-dom";
import { Image } from ".";
import { shallow } from "enzyme";

describe("Image", () => {
  it("Render with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Image src="test.jpg" />, div);
  });

  it("Wrapper must contain <img /> ", () => {
    const wrapper = shallow(<Image src="test.jpg" />);
    
    expect(wrapper.find("Img").length).toEqual(1);
  });
});
