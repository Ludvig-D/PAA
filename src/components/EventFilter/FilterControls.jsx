import style from "./FilterControls.module.css"

function FilterControls({ filter, setFilter }) {
  return (
    <div className={style.filtercontrols}>
      <button
        className={filter === "all" ? style.active: ""}
        onClick={() => setFilter("all")}
      >
        Alla
      </button>

      <button
        className={filter === "upcoming" ? style.active : ""}
        onClick={() => setFilter("upcoming")}
      >
        Kommande
      </button>

      <button
        className={filter === "past" ? style.active : ""}
        onClick={() => setFilter("past")}
      >
        Tidigare
      </button>
    </div>
  )
}

export default FilterControls
