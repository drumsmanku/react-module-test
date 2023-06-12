import React, { useState, useEffect } from "react";
import './NotesComponent.css';
import img2 from '../Assets/img2.png'

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
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();

      setNotes([...notes, { text: newNote, date, time }]);
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
          <div key={idx} style={{display:'flex', width:'65vw', justifyContent:'flex-start', height:'6rem', marginLeft:'3rem', flexWrap:'wrap'}}>
            <div>
              <p style={{margin:'0'}}>{note.date}</p>
              <p style={{margin:'0'}}>{note.time}</p> 
            </div>
            <div style={{marginLeft:'6rem', width:'80%', textAlign:'left'}}>{note.text}</div>
          </div>
        ))}
      </div>
      <div style={{boxShadow:'0 0 0 2.1rem #E8E8E8', height:'11rem', width:'65vw', backgroundColor:'#fff', display:'flex', flexDirection:'column', borderRadius:'0.5rem', position:'relative'}}>
        <span style={{position:'absolute', left:'2rem', top:'2rem', fontWeight:'bold', fontSize:'1.5rem', color:'#9A9A9A'}}>Enter your Text here...</span>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={handleAddNote}
          
          style={{height: '9rem', width: '90%', border: 'none'}}
        />
        <div style={{width:'100%', display:'flex', justifyContent:"flex-end", marginBottom:'3rem'}}>
          <img onClick={handleAddNote} src={img2} alt="" style={{marginRight:'2rem', zIndex:2, marginBottom:'1rem'}} height={20} width={20} />
        </div>
        
      </div>
    </div>
  );
};

export default NotesComponent;
