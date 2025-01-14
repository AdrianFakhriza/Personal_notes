import { useState } from 'react';
import { getInitialData } from './index';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: +new Date(), createdAt: new Date().toISOString() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Catatan Pribadi</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteInput onAddNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList 
        notes={filteredNotes.filter(note => !note.archived)}
        onDelete={deleteNote}
        onArchive={toggleArchive}
      />
      <h2>Arsip</h2>
      <NoteList 
        notes={filteredNotes.filter(note => note.archived)}
        onDelete={deleteNote}
        onArchive={toggleArchive}
      />
    </div>
  );
};

export default App;