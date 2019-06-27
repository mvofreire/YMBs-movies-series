import React from "react";
import ReactDOM from "react-dom";
import { Banner } from ".";
import { shallow } from "enzyme";

describe("Banner", () => {
  const banners = [
    {
      id: "123"
    },
    {
      id: "123"
    }
  ];
  
  it("Render with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Banner banners={banners} />, div);
  });

  it("call callback when click banner", () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Banner banners={banners} onClickBanner={callback} />
    );

    wrapper
      .find("BannerItem")
      .first()
      .simulate("click");

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
