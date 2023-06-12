import React from 'react';
import './MainPage.css';
import PopUp from './PopUp';
import { useEffect, useState } from 'react';

function MainPage() {
  const myGroups=JSON.parse(localStorage.getItem('group'));
  useEffect(()=>{
    console.log(myGroups)
  }, [])
  return (
    <div className='main-container'>
      <div className="first-compartment">
          <h1>Pocket Notes</h1>
          <div className='group-buttons'>
            <PopUp/>
            

          </div>
      </div>
      <div className="second-comartment">

      </div>
    </div>
  )
}

export default MainPage