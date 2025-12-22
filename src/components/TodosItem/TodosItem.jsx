import {useContext} from 'react'
import { TodoContext } from '../../context/TodoContext';
export default function todosItem({todo, handleEdit, list}) {
const { todos, deleteTodo, toggleStatus } = useContext(TodoContext); 
    return (<div >
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
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

        {list && <button
            onClick={() => handleEdit(todo)}
            style={{
                //kan styla något härs
            }}
        >
            Redigera
        </button>}

        <button onClick={() => deleteTodo(todo.id)}>
            Ta bort
        </button>
    </div>)
}


