import React from "react";
import sampleUser from "../sampleUser.json";

function Home(props) {
  const showGoals = () => {
    return sampleUser.map((eachItem) => {
      return (
        <div className="goal-bar margin-main">
          <div className="goal-bar-left">
            <h1>{eachItem.icon}</h1>
            <p>{eachItem.description}</p>
          </div>
          <div>
            {eachItem.completion}/{eachItem.total}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="home bg-color">
    <div className='margin-main'>
    <h1>Goals List</h1>
    </div>
      {showGoals()}
    </div>
  );
}

export default Home;
