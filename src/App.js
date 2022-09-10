import React, { useState } from 'react';
import './App.css';

import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
import Sidebar from './components/Sidebar';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }

  // const addNote = (color) => {
  //   const tempNotes = [...notes];

  //   tempNotes.push({
  //     id: Date.now() + "" + Math.floor(Math.random() * 78),
  //     text: "",
  //     time: Date.now(),
  //     color,
  //   });
  //   setNotes(tempNotes);
  // };

  return (
    <div className="App">
      <Sidebar />
      <Count
        count={
          notes.length === 0 ? 'Empty 🥴' : `You have ${notes.length} Notes ✅ `
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
