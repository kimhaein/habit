import React, { Component } from "react";
import { Input } from 'antd';
const { TextArea } = Input;

class Memo extends Component {
  render() {
    const { memo, handleChangeEvent } = this.props;
    return (
      <div className="memo">
        <label>메모</label>
        <TextArea onChange={handleChangeEvent} defaultValue={memo} autosize={{ minRows: 8}} />
      </div>
    );
  }
}

export default Memo;
