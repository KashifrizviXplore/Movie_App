const Pagination = ({ page, totalPages, onPageChange }) => {
  // Create a small range of page numbers
  const pageNumbers = [];

  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center my-8 gap-2">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-4 py-2 rounded-lg border shadow-sm transition
            ${
              num === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-100"
            }
          `}
        >
          {num}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
