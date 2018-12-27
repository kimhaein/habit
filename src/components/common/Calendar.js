import React, { Component, Fragment } from "react";
import { Calendar, Badge } from "antd";
import moment from "moment";

class Calendars extends Component {
  state = {
    dateDate: [
      {
        dateID: 1,
        date: "2018-12-24",
        type: "default"
      },
      {
        dateID: 2,
        date: "2018-12-25",
        type: "processing"
      },
      {
        dateID: 3,
        date: "2018-12-26",
        type: "default"
      },
      {
        dateID: 4,
        date: "2018-12-27",
        type: "processing"
      }
    ]
  };
  getListData = value => {
    let listData = this.state.dateDate.filter(
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
        <Calendar fullscreen={false} dateCellRender={this.dateCellRender} />
      </div>
    );
  }
}

export default Calendars;
