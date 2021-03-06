import React, { Component, Fragment } from "react";
import { Calendar, Badge } from "antd";
import moment from "moment";

class Calendars extends Component {
  componentDidMount() {
    moment.locale();
  }
  getListData = value => {
    let listData = this.props.dateData.filter(
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
      <Calendar
        className="calendar"
        fullscreen={false}
        dateCellRender={this.dateCellRender}
      />
    );
  }
}

export default Calendars;
