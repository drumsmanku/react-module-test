import React from "react";
import './PopUp.css'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PopUp() {
  return (
    <div>
      <Popup trigger={<button> Click to add new Group </button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content">Welcome to GFG!!!</div>
            <div>
              <button onClick={() => close()}>Close modal</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
