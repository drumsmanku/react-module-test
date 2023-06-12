import React, { useState, useEffect } from "react";
import "./MainPage.css";
import PopUp from "./PopUp";

function MainPage() {
  const [myGroups, setMyGroups] = useState(() => {
    const storedValue = localStorage.getItem("group");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(myGroups)); 
  }, [myGroups]);

  return (
    <div className="main-container">
      <div className="first-compartment">
        <h1>Pocket Notes</h1>
        <div className="group-buttons">
          <PopUp myGroups={myGroups} setMyGroups={setMyGroups} />
          {myGroups.map((group, idx) => (
            <button className="cat-buttons" key={idx}>
              <div className="icon">hey</div> {group}
            </button>
          ))}
        </div>
      </div>
      <div className="second-compartment"></div>
    </div>
  );
}

export default MainPage;
