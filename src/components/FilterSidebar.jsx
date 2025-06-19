const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"];

const FilterSidebar = ({ onSelectGenre }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
        🎬 Filter by Genre
      </h2>
      <ul className="space-y-3">
        {genres.map((genre) => (
          <li key={genre}>
            <button
              onClick={() => onSelectGenre(genre)}
              className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 rounded-lg transition duration-200 ease-in-out"
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
