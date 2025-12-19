import style from './FilterControls.module.css';

function FilterControls({ filter, setFilter }) {
  return (
    <div className={style.filtercontrols}>
      <button
        className={`${style.btn} ${filter === 'all' ? style.active : ''}`}
        onClick={() => setFilter('all')}
      >
        Alla
      </button>

      <button
        className={`${style.btn} ${filter === 'upcoming' ? style.active : ''}`}
        onClick={() => setFilter('upcoming')}
      >
        Kommande
      </button>

      <button
        className={`${style.btn} ${filter === 'past' ? style.active : ''}`}
        onClick={() => setFilter('past')}
      >
        Tidigare
      </button>
    </div>
  );
}

export default FilterControls;
