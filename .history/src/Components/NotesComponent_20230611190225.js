import React, { useState, useEffect } from "react";
import './NotesComponent.css'

const NotesComponent = ({ groupIndex, groupName }) => {
  const [localStorageKey, setLocalStorageKey] = useState(`notes_${groupName}`);

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
      <div style={{textAlign:'left', width:'inherit'}}>
        <h2 >{groupName}</h2>
      </div>
      
      <div className="notes-section">
        {notes.map((note, idx) => (

          <div style={{}} key={idx}>{note}</div>
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
