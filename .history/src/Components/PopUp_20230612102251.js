import React, { useState } from "react";
import "./PopUp.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PopUp({ myGroups, setMyGroups }) {
  const [input, setInput] = useState("");
  const colorSet=['#e9d499','#25f073','#dcf4b6','#17cb98','#cb6856']

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
          <div style={{height:'30vh',paddingLeft:'2rem' }} className="modal">
            <div style={{ fontWeight:'bold', fontSize:'1.5rem'}} className="content">Welcome to GFG!!!</div>
            <div style={{marginLeft:'1rem'}}>
              <div>
                <label htmlFor="name" style={{marginRight:'2rem', fontWeight:'bold', fontSize:'1.5rem'}}>Group Name </label>
                <input type="text" onChange={handleInputChange} value={input} />
              </div>
              <button onClick={handleButtonClick}>add</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
