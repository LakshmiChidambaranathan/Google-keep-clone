import React, { useState } from "react";
import "./styles.css";
import Header from "./Components/Header/Header";
import CreateNote from "./Components/CreateNote/CreateNote";
import AddNote from "./Components/AddNote/AddNote";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <AddNote
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
