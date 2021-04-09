import React from "react";
import sampleUser from '../sampleUser.json';

function Home(props) {
  const showGoals = () => {
    return sampleUser.map((eachItem) => {
      return (
        <div className='goal-bar'>
          <div className='goal-bar-left'>
            <article>{eachItem.icon}</article>
            <p>{eachItem.description}</p>
          </div>
          <div>
            {eachItem.completion}/{eachItem.total}
          </div>
        </div>
      );
    });
  };

  return <div className='home'>{showGoals()}</div>;
}

export default Home;
