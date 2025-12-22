import { useContext } from 'react';
import style from './todosItem.module.css';
import { TodoContext } from '../../context/TodoContext';

export default function TodosItem({ todo, handleEdit, list }) {
    const { deleteTodo, toggleStatus } = useContext(TodoContext);

    return (
        <div className={style.item}>
            <div>
                <p className={style.title}>{todo.title}</p>
                <p>{todo.description}</p>
                <p className={`${style.tag} ${style[todo.priority]}`}>{todo.priority}</p>
                <p>{todo.category}</p>
                <p>{todo.deadline}</p>
                <p>{todo.timeEstimate} min</p>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.status}
                            onChange={() => toggleStatus(todo.id)}
                        />
                        <span>
                            {todo.status ? 'slutförd' : 'ej slutförd'}
                        </span>
                    </label>
                </div>
            </div>
            <div className={style.removeBtnDiv}>
                {list && (
                    <button onClick={() => handleEdit(todo)} className={style.removeBtn}>
                        Redigera
                    </button>
                )}
                <button onClick={() => deleteTodo(todo.id)} className={style.removeBtn}>
                    Ta bort
                </button>
            </div>
        </div>
    );
}



