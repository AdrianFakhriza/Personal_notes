import { useState } from 'react';

const NoteInput = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onAddNote({ title, body, archived: false });
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <div>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
        />
        <span>{maxTitleLength - title.length} karakter tersisa</span>
      </div>
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteInput;