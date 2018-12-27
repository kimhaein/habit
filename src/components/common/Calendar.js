import React, { Component, Fragment } from "react";
import { Calendar, Badge } from "antd";
import moment from "moment";

class Calendars extends Component {
  /**
   *
   */
  getListData = value => {
    let listData = this.props.dateDate.filter(
      item => value === moment(item.date).format("YYYY-MM-DD")
    );
    return listData;
  };

  dateCellRender = value => {
    const calenderData = moment(value).format("YYYY-MM-DD");
    const listData = this.getListData(calenderData);
    return (
      <Fragment>
        {listData.map(item => (
          <Badge key={value} status={item.type} offset={[4, 0]} />
        ))}
      </Fragment>
    );
  };

  render() {
    return (
      <div>
        <Calendar
          fullscreen={false}
          dateCellRender={this.dateCellRender}
          validRange={[moment("2018-12-12"), moment("2018-12-30")]}
        />
      </div>
    );
  }
}

export default Calendars;
