const Categories = ({ categories, setCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          className="filter-btn"
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
