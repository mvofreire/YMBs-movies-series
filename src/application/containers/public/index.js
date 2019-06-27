import React, { Component } from "react";
import { publicMenus } from "application/pages";
import { LayoutPublic } from "application/layout";
import { Content } from "./content";
import { Menu, findMenuByPath } from "components";

export default class PublicPage extends Component {
  constructor(p) {
    super(p);
    const { location } = this.props;
    this.state = {
      activeMenuKey: [findMenuByPath(location.pathname, publicMenus).key]
    };
    this.unlistenHistory = null;
  }

  componentDidMount() {
    const { history } = this.props;
    this.unlistenHistory = history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    this.unlistenHistory && this.unlistenHistory();
  }

  handleLocationChange = ({ pathname }) => {
    this.setActiveMenu(findMenuByPath(pathname, publicMenus).key);
  };

  setActiveMenu = key => {
    this.setState({
      activeMenuKey: [key]
    });
  };

  onMenuClick = item => {
    const { history } = this.props;

    history.push(item.path);
  };

  render() {
    const { activeMenuKey } = this.state;
    return (
      <LayoutPublic
        header={
          <Menu
            menuOptions={{
              theme: "dark",
              mode: "horizontal",
              defaultSelectedKeys: activeMenuKey,
              style: { lineHeight: "64px" }
            }}
            onClickMenu={this.onMenuClick}
            menus={publicMenus}
          />
        }
        content={<Content />}
      />
    );
  }
}
