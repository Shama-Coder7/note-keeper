import React, { useState } from 'react';

import plusNote from '../images/plusNote.jpg';

import './Sidebar.css';

function Sidebar() {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <ul className={`sidebar_list ${listOpen ? 'sidebar_list_active' : ''}`}>
        <h2>NoteKeeper</h2>

        <img
          className="logo-img"
          src={plusNote}
          alt="Add"
          onClick={() => setListOpen(!listOpen)}
        />
      </ul>
    </div>
  );
}

export default Sidebar;
