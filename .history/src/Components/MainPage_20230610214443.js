import React, { useState, useEffect } from "react";
import "./MainPage.css";
import PopUp from "./PopUp";
import NotesComponent from "./NotesComponent";

function MainPage() {
  const colors = [
    "#81acbc",
    "#567da2",
    "#9c7ac8",
    "#91b1c5",
    "#ea9fd8",
    "#35f030",
    "#8c5064",
    "#186e33",
    "#c25650",
    "#cc7ec7",
    "#2521ef",
    "#e9d499",
    "#25f073",
    "#dcf4b6",
    "#17cb98",
    "#cb6856",
    "#49616e",
    "#7fef88",
    "#362f6",
    "#08e400",
    "#9726a2",
    "#5c0a51",
  ];

  const [showComponent, setShowComponent] = useState(false);

  const addComponent = (groupId) => {
    setShowComponent(groupId);
  };

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
        {showComponent !== false && (
          <NotesComponent
            groupId={showComponent}
            groupName={myGroups[showComponent]}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;
