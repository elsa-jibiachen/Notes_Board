import React from "react";
import NoteDraggable from "./NoteDraggable";
import "./Note.css";

function Note(props) {
    return (
        <NoteDraggable 
        text={props.note.text}
        id={props.note.id}/>
    );
  }

export default Note;