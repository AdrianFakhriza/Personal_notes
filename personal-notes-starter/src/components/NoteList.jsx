const NoteList = ({ notes, onDelete, onArchive }) => {
    if (notes.length === 0) {
      return <p>Tidak ada catatan</p>;
    }
  
    return (
      <div className="note-list">
        {notes.map(note => (
          <div key={note.id} className="note-item">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p className="note-date">{new Date(note.createdAt).toLocaleDateString()}</p>
            <div className="note-buttons">
              <button onClick={() => onDelete(note.id)}>Hapus</button>
              <button onClick={() => onArchive(note.id)}>
                {note.archived ? 'Pindahkan' : 'Arsipkan'}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default NoteList;