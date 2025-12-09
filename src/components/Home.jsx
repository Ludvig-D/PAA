import React, { useState } from "react";
import { useNavigate } from "react-router";
const Home = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);



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




export default Home