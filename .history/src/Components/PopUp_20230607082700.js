import React from "react";
import './PopUp.css'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState,useEffect } from "react";

function PopUp() {
  const [input, setInput]=useState(null);
  const [group, setGroup] = useState([])
  const handleInputChange=(event)=>{
    setInput(event.target.value);
  }
  const handleButtonClick=()=>{
    setGroup([...group, input]);
  }
  return (
    <div>
      <Popup trigger={<button> Click to add new Group </button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content">Welcome to GFG!!!</div>
            <div>
              <button onClick={() => close()}>Close modal</button>
              <input type="text" value={input} />
              <button>add</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
