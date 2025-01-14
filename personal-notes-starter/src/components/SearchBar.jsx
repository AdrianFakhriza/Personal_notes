const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;