import React from "react";
import "./input.css";
const Inputs = ({ room,person,discrip,handleMeeting, handleName, handleDiscription }) => {
  return (
    <div className=" mainContainer mt-4">
      <div>
        <label className="form-label">Select Room</label>
        <div className="input-group">
          <select
            className="form-select"
            onChange={(event) => handleMeeting(event)}
          >
            <option defaultValue>Select Room</option>
            <option value="meeting">Meeting Room</option>
            <option value="training">Training Room</option>
            <option value="confference">Confference Room</option>
          </select>
        </div>
      </div>
      <div>
        <label className="form-label mt-3">Name</label>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            onChange={(event) => handleName(event)}
            value={person}
            required
          />
        </div>
      </div>

      <div>
        <label className="form-label mt-3">Meeting Description</label>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            onChange={(event) => handleDiscription(event)}
            value={discrip}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
