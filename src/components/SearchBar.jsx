const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded shadow"
      />
    </div>
  );
};

export default SearchBar;
