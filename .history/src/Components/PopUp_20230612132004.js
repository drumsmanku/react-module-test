import React, { useState } from "react";
import "./PopUp.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PopUp({ myGroups, setMyGroups, color, setColor }) {
  const [input, setInput] = useState("");
  const colorSet=['#e9d499','#25f073','#dcf4b6','#17cb98','#cb6856']

  const handleColor=(event)=>{
    setColor(event.target.backgroundColor);
  }

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
          <div style={{height:'30vh',paddingLeft:'2rem', paddingTop:'2rem' }} className="modal">
            <div style={{ fontWeight:'bold', fontSize:'1.5rem', marginBottom:'1.5rem'}} className="content">Welcome to GFG!!!</div>
            <div style={{marginLeft:'1rem'}}>
              <div style={{marginBottom:'1.8rem'}}>
                <label htmlFor="name" style={{marginRight:'2rem', fontWeight:'bold', fontSize:'1.5rem'}}>Group Name </label>
                <input style={{width:'25rem',height:'2rem', borderRadius:'2rem', border:'0.2rem solid #CCCCCC', fontSize:'1.3rem', paddingLeft:'1rem'}} type="text" onChange={handleInputChange} value={input} placeholder="Enter your group name...." />
              </div>
              <div style={{display:'flex', alignItems:'center', marginBottom:'1.8rem'}} className="hues">
                <label htmlFor="color" style={{marginRight:'2rem', fontWeight:'bold', fontSize:'1.5rem'}}>Choose colour</label>
                <div style={{display:'flex'}}>
                  {colorSet.map((color, idx)=>(
                    <div onClick={handleColor} key={idx} style={{height:'1.8rem', width:'1.8rem', borderRadius:'50%', backgroundColor:color, marginRight:'1rem'}}></div>
                  ))}
                </div>
                
              </div>
              <div style={{width:'90%', display:'flex', justifyContent:'flex-end'}}>
                <button style={{width:'8rem', height:'2rem', backgroundColor:'black', color:'white', border:'none', borderRadius:'0.5rem', fontSize:'1.2rem'}} onClick={handleButtonClick}>add</button>
              </div>
              
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
