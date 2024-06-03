import React, { useState } from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(props) {

  return (
    <div className="note-container">
        <div className="note-container-notes" onDoubleClick={() => props.addNote()}>
            {
                props.notes.map((item)=> <Note
                key={item.id}
                note={item}
                />)
            }
        </div>
    </div>
  );
}
export default NoteContainer;