function FilterControls({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>Alla</button>
      <button onClick={() => setFilter("upcoming")}>Kommande</button>
      <button onClick={() => setFilter("past")}>Tidigare</button>
    </div>
  )
}

export default FilterControls
