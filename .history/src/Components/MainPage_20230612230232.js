import React, { useState, useEffect } from "react";
import "./MainPage.css";
import PopUp from "./PopUp";
import NotesComponent from "./NotesComponent";
import img1 from '../Assets/img1.png'

function MainPage() {

  const colors=['#81acbc', '#567da2','#9c7ac8','#91b1c5','#ea9fd8','#35f030','#8c5064','#186e33','#c25650','#cc7ec7','#2521ef','#e9d499','#25f073','#dcf4b6','#17cb98','#cb6856','#49616e','#7fef88','#a362f6','#08e400','#9726a2','#5c0a51' ];

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [buttonState, setButtonState] = useState(false);

  const addComponent = (groupIndex) => {
    setSelectedGroup(groupIndex);
  };
  const [myGroups, setMyGroups] = useState(() => {
    const storedValue = localStorage.getItem("group");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(myGroups)); 
  }, [myGroups]);

  useEffect(()=>{
    setButtonState(true);
  },[])

  return (
    <div className="main-container">
      <div className="first-compartment">
        <h1>Pocket Notes</h1>
        <div className="group-buttons">
          <PopUp myGroups={myGroups} setMyGroups={setMyGroups} />
          {myGroups.map((group, idx) => (
            <button
              className="cat-buttons"
              key={idx}
              onClick={() => addComponent(idx)}
            >
              <div
                className="icon"
                style={{ backgroundColor: colors[idx] }}
              ></div>{" "}
              {group}
            </button>
          ))}
        </div>
      </div>
      <div className="second-compartment">
        
        {selectedGroup !== null && (
          <NotesComponent
            groupIndex={selectedGroup}
            groupName={myGroups[selectedGroup]}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;
