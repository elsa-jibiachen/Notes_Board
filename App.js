import React, { useState, useEffect } from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import * as XLSX from "xlsx/xlsx"; // Import XLSX library
import "./App.css";

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes-app')) || []);

  const addNote = () => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "new note ",
    });
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  },[notes])

  const exportToExcel = () => {
    const data = notes.map((note) => [note.text]); // Extract text from notes

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Notes");

    XLSX.writeFile(wb, "notes.xlsx");
  };

  return (
    <div className="App">
      <NoteContainer notes={notes} addNote={addNote} updateText={updateText}/>
      <button onClick={exportToExcel} className="export-button">
        Export Notes
      </button>
    </div>
  );
}
export default App;