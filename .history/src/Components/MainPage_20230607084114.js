import React from 'react';
import './MainPage.css';
import PopUp from './PopUp';

function MainPage() {
  return (
    <div className='main-container'>
      <div className="first-compartment">
          <h1>Pocket Notes</h1>
          <PopUp/>
      </div>
      <div className="second-comartment">

      </div>
    </div>
  )
}

export default MainPage