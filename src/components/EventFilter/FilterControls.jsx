import "./FilterControls.css"

function FilterControls({ filter, setFilter }) {
  return (
    <div className="filter-controls">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Alla
      </button>

      <button
        className={filter === "upcoming" ? "active" : ""}
        onClick={() => setFilter("upcoming")}
      >
        Kommande
      </button>

      <button
        className={filter === "past" ? "active" : ""}
        onClick={() => setFilter("past")}
      >
        Tidigare
      </button>
    </div>
  )
}

export default FilterControls
