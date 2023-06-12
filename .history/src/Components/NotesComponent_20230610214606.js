import React, { useState, useEffect } from "react";

const NotesComponent = ({ groupIndex, groupName }) => {
  const [notes, setNotes] = useState(() => {
    const storedValue = localStorage.getItem(`notes_${groupIndex}`);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem(`notes_${groupIndex}`, JSON.stringify(notes));
  }, [notes, groupIndex]);

  const handleAddNote = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  return (
    <div>
      <h2>{groupName}</h2>
      <div>
        {notes.map((note, idx) => (
          <div key={idx}>{note}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={handleAddNote}
          placeholder="Add a new note"
        />
        <button onClick={handleAddNote}>Enter</button>
      </div>
    </div>
  );
};

export default NotesComponent;
