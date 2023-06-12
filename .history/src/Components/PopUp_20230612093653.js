import React, { useState } from "react";
import "./PopUp.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PopUp({ myGroups, setMyGroups }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    setMyGroups([...myGroups, input]);
    setInput("");
  };

  return (
    <div className="popup-container">
      <Popup
        trigger={<button className="btn-1">Create Notes group</button>}
        modal
        nested
        
      >
        {(close) => (
          <div style={{height:'30vh', width:'20vw'}} className="modal">
            <div className="content">Welcome to GFG!!!</div>
            <div>
              <button onClick={() => close()}>Close modal</button>
              <input type="text" onChange={handleInputChange} value={input} />
              <button onClick={handleButtonClick}>add</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
