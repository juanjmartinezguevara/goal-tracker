import React from "react";

function Home(props) {
  let sampleArr = [
    {
      icon: "💙",
      description: "Limit social media to 3 hours/day",
      completion: 1,
      total: 3,
    },
    {
      icon: "🔥",
      description: "Drink 5 water bottles/day",
      completion: 4,
      total: 5,
    },
  ];
  const showGoals = () => {
    return sampleArr.map((eachItem) => {
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
