import React, { useState, useEffect } from "react";
import "./MainPage.css";
import PopUp from "./PopUp";

function MainPage() {

  const colors=['#81acbc', '#567da2','#9c7ac8','#91b1c5','#ea9fd8','#35f030','#8c5064','#186e33','#c25650','#cc7ec7','#2521ef','#e9d499','#25f073','#dcf4b6','#17cb98','#cb6856','#49616e','#7fef88','#a362f6','#08e400','#9726a2','#5c0a51', ]
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
              <div className="icon" style={{backgroundColor:'blue'}}></div> {group}
            </button>
          ))}
        </div>
      </div>
      <div className="second-compartment"></div>
    </div>
  );
}

export default MainPage;
