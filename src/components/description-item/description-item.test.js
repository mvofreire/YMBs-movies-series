import React from "react";
import ReactDOM from "react-dom";
import { DescriptionItem } from ".";
import { shallow } from "enzyme";

describe("DescriptionItem", () => {
  it("Render with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DescriptionItem title="TITLE" content="CONTENT" />, div);
  });

  it("Wrapper must contain <img /> ", () => {
    const wrapper = shallow(
      <DescriptionItem title="TITLE" content="CONTENT" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
