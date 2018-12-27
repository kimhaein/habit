import React, { Component } from "react";
// Image
import sideNavImg from "../../assets/imgs/icons8-menu-32.png";
import topLogoImg from "../../assets/imgs/top_logo.png";
import createImg from "../../assets/imgs/icons8-create-32.png";

class TopNav extends Component {
  render() {
    return (
      <div className="top_nav">
        <div className="btn_side_nav">
          <img src={sideNavImg} alt="sideNav" />
        </div>
        <div className="top_logo">
          <a href="/">
            <img src={topLogoImg} alt="topLogo" />
          </a>
        </div>
        <div className="btn_create">
          <a href="/">
            <img src={createImg} alt="create" />
          </a>
        </div>
      </div>
    );
  }
}

export default TopNav;
