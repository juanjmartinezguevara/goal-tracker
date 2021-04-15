import React from "react";

function AddGoal(props) {
  const handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("Form was successfully submitted!");
    event.preventDefault();
  };

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
              <input value="daily" type="radio"></input>Daily
            </label>
            <label>
              <input value="weekly" type="radio"></input>Weekly
            </label>
            <label>
              <input value="biweekly" type="radio"></input>Biweekly
            </label>
            <label>
              <input value="monthly" type="radio"></input>Monthly
            </label>
          </div>
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
