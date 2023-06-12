import React, { useState, useEffect } from "react";
import './NotesComponent.css'

const NotesComponent = ({ groupIndex, groupName }) => {
  const [localStorageKey, setLocalStorageKey] = useState(`notes_${groupName}`);
  const myDate=new Date();
  const myTime=new Date().toJSON().slice(12,19);
  let day=myDate.getDate();
  let month=myDate.getMonth()+1;
  let year=myDate.getFullYear();

  const [notes, setNotes] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    setLocalStorageKey(`notes_${groupName}`);
  }, [groupName]);

  useEffect(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    setNotes(storedValue ? JSON.parse(storedValue) : []);
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
  }, [notes, localStorageKey]);

  const handleAddNote = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  return (
    <div className="notes-container">
      <div style={{textAlign:'left', width:'inherit', height:'5rem', display:'flex', alignItems:'center', backgroundColor:'#E8E8E8'}}>
        <div style={{height:'3.5rem', width:'3.5rem', borderRadius:'50%', marginRight:'2rem', marginLeft:'1rem' , backgroundColor:'blue'}}></div>
        <h2 >{groupName}</h2>
      </div>
      
      <div className="notes-section">
        {notes.map((note, idx) => (
          <div>
            <div>
              {myTime}
              <p>{day} {month} {year}</p> 
            </div>
            <div style={{}} key={idx}>{note}</div>
          </div>
          
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={handleAddNote}
          placeholder="Add a new note"
        />
        <button onClick={handleAddNote}>Enter</button>
      </div>
    </div>
  );
};

export default NotesComponent;
