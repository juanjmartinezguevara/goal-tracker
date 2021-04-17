import React from "react";

function AddGoal(props) {
  const handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("Form was successfully submitted!");
    event.preventDefault();
  };

  const showDays = () => {
    return (
      <div>
      <input value="monday" type="radio">Monday</input>
      <input value="tuesday" type="radio">Tuesday</input>
      <input value="wednesday" type="radio">Wednesday</input>
      <input value="thursday" type="radio">Thursday</input>
      <input value="friday" type="radio">Friday</input>
      <input value="saturday" type="radio">Saturday</input>
      <input value="sunday" type="radio">Sunday</input>
      </div>
    )
  }

  return (
    <div className="bg-color">
      <div className="margin-main">
        <form>
          <label>
            <h2>Goal</h2> <br/>
            <input type="text" placeholder='Goal name' />
          </label>
          <label>
            <h2>Units</h2> <br/>
            <input type="number" placeholder='Goal count' />
            <input type="text" placeholder='Goal unit of measurement' />
          </label>
          <div>
          <h2>Frequency</h2>
            <label>
              <input value="daily" type="radio"></input><h4 style={{display: 'inline'}}>Daily</h4>
            </label>
            <label>
              <input value="weekly" type="radio"></input><h4 style={{display: 'inline'}}>Weekly</h4>
            </label>
            <label>
              <input value="biweekly" type="radio"></input><h4 style={{display: 'inline'}}>Biweekly</h4>
            </label>
            <label>
              <input value="monthly" type="radio"></input><h4 style={{display: 'inline'}}>Monthly</h4>
            </label>
          </div>
          {showDays}
          <label>
            <h2>Start Date</h2> <br/>
            <input type="date" />
          </label>
          <label>
            <h2>End Date</h2> <br/>
            <input type="date" />
          </label>
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default AddGoal;
