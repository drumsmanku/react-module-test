import React from "react";
import './PopUp.css'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState,useEffect } from "react";

function PopUp() {
  const [input, setInput]=useState("");
  const [group, setGroup] = useState([])
  const handleInputChange=(event)=>{
    setInput(event.target.value);
  }
  const handleButtonClick=()=>{
    setGroup([...group, input]);
    setInput(''); 
  }
  useEffect(() => {
    localStorage.setItem('group', JSON.stringify(group));
    const storedValue = localStorage.getItem('group');
    console.log(storedValue);
  }, [group]);

  return (
    <div>
      <Popup trigger={<button className="btn-1"> Create Notes group </button>} modal nested>
        {(close) => (
          <div className="modal">
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
