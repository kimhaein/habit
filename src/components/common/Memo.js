import React, { Component } from "react";

class Memo extends Component {
  render() {
    const { memo, handleChangeEvent } = this.props;
    return (
      <div className="memo">
        <label>메모</label>
        <textarea rows="8" onChange={handleChangeEvent} defaultValue={memo} />
      </div>
    );
  }
}

export default Memo;
