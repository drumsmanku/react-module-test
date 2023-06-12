import React, { useState, useEffect } from "react";
import "./MainPage.css";
import PopUp from "./PopUp";

function MainPage() {
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem("group");
    if (storedValue) {
      setMyGroups(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(myGroups));
  }, [myGroups]);
  useEffect(() => {
    console.log("localStorage data:", localStorage.getItem("group"));
  }, []);

  return (
    <div className="main-container">
      <div className="first-compartment">
        <h1>Pocket Notes</h1>
        <div className="group-buttons">
          <PopUp myGroups={myGroups} setMyGroups={setMyGroups} />
          {myGroups.map((group, idx) => (
            <button key={idx}>
              <img src="" alt="" /> {group}
            </button>
          ))}
        </div>
      </div>
      <div className="second-compartment"></div>
    </div>
  );
}

export default MainPage;
