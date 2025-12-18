import React, { useContext, useState } from "react";
import { TodoContext } from '../context/TodoContext';
import Modal from '../components/Modal';
import TodoFormComponent from '../components/TodoFormComponent';

const TodoListPage = () => {
    const { todos, deleteTodo, toggleStatus } = useContext(TodoContext);  // ÄNDRAT
    const [showModal, setShowModal] = useState(false);
    const [todoToEdit, setTodoToEdit] = useState(null);
    const [statusFilter, setStatusFilter]= useState('all');
    const [selectedCategories, setSelectedCategories] = useState(['Hälsa','Jobbrelaterat', 'Nöje', 'Övrigt']);

    const handleEdit = (todo) => {
        setTodoToEdit(todo);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTodoToEdit(null);
    };

    const handleCategoryToggle = (category)=>{
        if (selectedCategories.includes(category)){
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories,category]);
        };
        
    }
    return (
        <div>
            <h1>Todos & Activity</h1>
            <p>Ärande</p>
            <button onClick={() => setShowModal(true)}>Skapa ny</button>
            
            
            {/* Filter panel*/}
            <div>
                <h3>Filter</h3>
                <div>
                    <label>Status:</label>
                    <select value= {statusFilter}
                        onChange={(e)=>setStatusFilter(e.target.value)}>

                        
                        <option value="all">Alla</option>
                        <option value="completed">Slutförda</option>
                        <option value="incomplete">Ej slutförda</option>
                    </select>
                </div>
                {/*Kategori*/}

               <div>
    <label>Kategorier:</label>
    <div>
        <button 
            onClick={() => handleCategoryToggle('Hälsa')}
            style={{ backgroundColor: selectedCategories.includes('Hälsa') ? 'green' : 'gray' }}
        >
            Hälsa
        </button>
        <button 
            onClick={() => handleCategoryToggle('Hushåll')}
            style={{ backgroundColor: selectedCategories.includes('Hushåll') ? 'green' : 'gray' }}
        >
            Hushåll
        </button>
        <button 
            onClick={() => handleCategoryToggle('Jobbrelaterat')}
            style={{ backgroundColor: selectedCategories.includes('Jobbrelaterat') ? 'green' : 'gray' }}
        >
            Jobbrelaterat
        </button>
        <button 
            onClick={() => handleCategoryToggle('Nöje')}
            style={{ backgroundColor: selectedCategories.includes('Nöje') ? 'green' : 'gray' }}
        >
            Nöje
        </button>
        <button 
            onClick={() => handleCategoryToggle('Övrigt')}
            style={{ backgroundColor: selectedCategories.includes('Övrigt') ? 'green' : 'gray' }}
        >
            Övrigt
        </button>
    </div>
</div>




            </div>

            {showModal && (
                <Modal onClose={handleCloseModal}>
                    <TodoFormComponent
                        onClose={handleCloseModal}
                        todoToEdit={todoToEdit}
                    />
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

                            <button
                                onClick={() => handleEdit(todo)}
                                style={{
                                    //kan styla något härs
                                }}
                            >
                                Redigera
                            </button>

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