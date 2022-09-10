import React, { useState } from 'react';

import { IoIosAdd } from 'react-icons/io';
import './CountArea.css';

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });

    console.log(e);
  }
  function handleExpanded() {
    setExpanded(true);
  }

  function handleSubmit(event) {
    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
    console.log('Note Added');
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Type here..."
            onChange={handleChange}
            rows={isExpanded ? 5 : 2}
          ></textarea>
        </p>
        <button onClick={handleSubmit}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
