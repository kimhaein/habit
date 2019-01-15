import React, { Component } from "react";
import { Avatar,Icon } from "antd";

class RewardsList extends Component {

  __render_icon = (rewardsResult) =>{

    if(rewardsResult){
      return <Icon type="smile" style={{ fontSize: '30px', color: 'green' }}/>        
    }else {
      return <Icon type="frown" style={{ fontSize: '30px', color: 'red' }}/> 
    }
  }
  render() {
    const {data} = this.props;
    console.log(1111,data)
    return (
      <div className="rewards_wrap">
        <div className="thumnail">
          <Avatar shape="square" size={40} icon="gift" />
        </div>
        <div className="rewards_info">
          <p>{data.rewardsTitle}</p>
          <p>{data.rewardsSdate} ~ {data.rewardsEdate}</p>
        </div>
        <div className="rewards_result">
          {this.__render_icon(data.rewardsResult)}
        </div>
      </div>
    );
  }
}

export default RewardsList;
