import React, { Component } from "react";
import Calendar from "../common/Calendar";
import Memo from "../common/Memo";

class DetailScreen extends Component {
  render() {
    const { detailData } = this.props;
    console.log(detailData);
    return (
      <div className="main_wrap">
        <div>{detailData.title}</div>
        <Calendar />
        <div>{detailData.completion_rate}%</div>
        <Memo memo={detailData.memo} />
      </div>
    );
  }
}

export default DetailScreen;
