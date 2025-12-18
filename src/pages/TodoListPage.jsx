import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { TodoContext } from '../context/TodoContext'; 
const TodoListPage = () => {
    const navigate = useNavigate();
    const { todos } = useContext(TodoContext); 



    const handleAddClick = () => {
        navigate('/form');
    }
    return (
        <div>
            <h1>Todos & Activity</h1>
            <p>Ärande</p>
            <button onClick={handleAddClick}>Skapa ny</button>

            <div>
                    {todos.length === 0?(
                    <p>inga ärande än. Skapa ett nytt!</p>):(
                        todos.map(todo =>
                    <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <p>{todo.category}</p>
                        <p>{todo.deadline}</p>
                    </div>
               )) }

            </div>

        </div>
    )
}




export default TodoListPage;