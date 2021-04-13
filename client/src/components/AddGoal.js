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
            Goal Description:
            <input type="text" />
          </label>
          <div>
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
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default AddGoal;
