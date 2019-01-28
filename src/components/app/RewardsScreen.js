import React, { Component } from "react";
import TopNav from "../nav/TopNav";
import RewardsList from "../common/RewardsList";

class RewardsScreen extends Component {
  state = {
    rewardsList: [
      {
        rewardsId: 2,
        rewardsImg: "",
        rewardsTitle: "아이패드",
        rewardsSdate: "2019-01-02",
        rewardsEdate: "2019-01-20",
        rewardsResult: false
      },
      {
        rewardsId: 1,
        rewardsImg: "",
        rewardsTitle: "상해여행",
        rewardsSdate: "2018-12-02",
        rewardsEdate: "2019-01-20",
        rewardsResult: true
      }
    ]
  };

  render() {
    const rewardsList = this.state.rewardsList;
    return (
      <div>
        <TopNav />
        <div className="main_wrap">
          <div className="title">보상 리스트</div>
          {rewardsList.map((data, i) => {
            return <RewardsList key={data.rewardsId} data={data} />;
          })}
        </div>
      </div>
    );
  }
}

export default RewardsScreen;
