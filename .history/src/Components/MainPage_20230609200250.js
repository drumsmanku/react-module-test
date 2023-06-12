import React from "react";
import "./MainPage.css";
import PopUp from "./PopUp";
import { useState } from "react";

function MainPage() {
  const [myGroups, setMyGroups] = useState(() => {
    const storedValue = localStorage.getItem("group");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  return (
    <div className="main-container">
      <div className="first-compartment">
        <h1>Pocket Notes</h1>
        <div className="group-buttons">
          <PopUp myGroups={myGroups} setMyGroups={setMyGroups} />
          {myGroups.map((group, idx) => (
            <button key={idx}>
              <img src="" alt="no" /> {group}
            </button>
          ))}
        </div>
      </div>
      <div className="second-compartment"></div>
    </div>
  );
}

export default MainPage;
