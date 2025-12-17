import React, { useContext, useState } from "react";
import { TodoContext } from '../context/TodoContext'; 
import Modal from '../components/Modal';
import TodoFormComponent from '../components/TodoFormComponent';

const TodoListPage = () => {
    const { todos, deleteTodo } = useContext(TodoContext);  // ÄNDRAT
    const [showModal, setShowModal] = useState(false);
    console.log('Alla todos:', todos);
    
    return (
        <div>
            <h1>Todos & Activity</h1>
            <p>Ärande</p>
            <button onClick={() => setShowModal(true)}>Skapa ny</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TodoFormComponent onClose={() => setShowModal(false)} />
                </Modal>
            )}

            <div>
                {todos.length === 0 ? (
                    <p>Inga ärenden än. Skapa ett nytt!</p>
                ) : (
                    todos.map(todo => (
                        <div key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <p>{todo.category}</p>
                            <p>{todo.deadline}</p>
                            <p>{todo.timeEstimate} min</p>
                            
                            <button onClick={() => deleteTodo(todo.id)}>
                                Ta bort
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default TodoListPage;