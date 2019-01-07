import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
// Image
import sideNavImg from "../../assets/imgs/icons8-menu-32.png";
import topLogoImg from "../../assets/imgs/top_logo.png";
import createImg from "../../assets/imgs/icons8-create-32.png";

class TopNav extends Component {
  state = { modalVisible: false };

  _showDrawer = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  render() {
    return (
      <Fragment>
        <div className="top_nav">
          <div className="btn_side_nav" onClick={this._showDrawer}>
            <img src={sideNavImg} alt="sideNav" />
          </div>
          <div className="top_logo">
            <Link to="/">
              <img src={topLogoImg} alt="topLogo" />
            </Link>
          </div>
          <div className="btn_create">
            <Link to="/create">
              <img src={createImg} alt="create" />
            </Link>
          </div>
        </div>
        <SideNav
          showDrawer={this._showDrawer}
          modalVisible={this.state.modalVisible}
        />
      </Fragment>
    );
  }
}

export default TopNav;
