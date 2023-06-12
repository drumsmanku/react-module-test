import React from 'react';
import './MainPage.css';
import PopUp from './PopUp';
import { useEffect, useState } from 'react';

function MainPage() {
  const [titlelist, setTitleList]=useState(null);
  const [myGroups, setMyGroups] = useState([]);
  
  useEffect(() => {
    const xyz=setMyGroups(JSON.parse(localStorage.getItem("group")) || []);
    console.log(xyz)
  }, []);

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(myGroups));
  }, [myGroups]);
  return (
    <div className='main-container'>
      <div className="first-compartment">
          <h1>Pocket Notes</h1>
          <div className='group-buttons'>
            <PopUp/>
            {
              myGroups.map((group, idx)=>(
                <button key={idx}><img src="" alt="no" /> {group}</button>
              ))
            }

          </div>
      </div>
      <div className="second-comartment">

      </div>
    </div>
  )
}

export default MainPage