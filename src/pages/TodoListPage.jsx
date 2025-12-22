import React, { useContext, useState } from "react";
import { TodoContext } from '../context/TodoContext';
import Modal from '../components/Modal';
import TodoFormComponent from '../components/TodoFormComponent';

const TodoListPage = () => {
        // State för sortering
        const [sortField, setSortField] = useState(''); // "deadline", "timeEstimate", "status"
        const [sortOrder, setSortOrder] = useState('asc'); // "asc" = stigande, "desc" = fallande
    const { todos, deleteTodo, toggleStatus } = useContext(TodoContext);  // ÄNDRAT
    const [showModal, setShowModal] = useState(false);
    const [todoToEdit, setTodoToEdit] = useState(null);
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedCategories, setSelectedCategories] = useState(['Hälsa', 'Hushåll', 'Jobbrelaterat', 'Nöje', 'Övrigt']);
    const categories = ['Hälsa', 'Hushåll', 'Jobbrelaterat', 'Nöje', 'Övrigt'];

    const handleEdit = (todo) => {
        setTodoToEdit(todo);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTodoToEdit(null);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategories([category]);
    };

    const handleShowAllCategories = () => {
        setSelectedCategories(categories);
    };

    // Funktion som filtrerar och sorterar todos
    const getFilteredTodo = () => {
        let filtered = todos;
        // Filter på status
        if (statusFilter === 'completed') {
            filtered = filtered.filter(todo => todo.status === true);
        } else if (statusFilter === 'incomplete') {
            filtered = filtered.filter(todo => todo.status === false);
        }
        // Filter på kategori
        filtered = filtered.filter(todo => selectedCategories.includes(todo.category));

        // Sortering
        if (sortField) {
            filtered = [...filtered].sort((a, b) => {
                let aValue = a[sortField];
                let bValue = b[sortField];
                // Om vi sorterar på status, konvertera till tal (true/false)
                if (sortField === 'status') {
                    aValue = aValue ? 1 : 0;
                    bValue = bValue ? 1 : 0;
                }
                // Om vi sorterar på deadline, konvertera till datum
                if (sortField === 'deadline') {
                    aValue = new Date(aValue);
                    bValue = new Date(bValue);
                }
                if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return filtered;
    }


    return (
        <div>
            {/* Sorteringspanel */}
            <div style={{ margin: '1em 0' }}>
                <h3>Sortering</h3>
                <label>Sortera på: </label>
                <button onClick={() => setSortField('deadline')} style={{ fontWeight: sortField === 'deadline' ? 'bold' : 'normal' }}>Deadline</button>
                <button onClick={() => setSortField('timeEstimate')} style={{ fontWeight: sortField === 'timeEstimate' ? 'bold' : 'normal' }}>Tidsestimat</button>
                <button onClick={() => setSortField('status')} style={{ fontWeight: sortField === 'status' ? 'bold' : 'normal' }}>Status</button>
                <button onClick={() => setSortField('')} style={{ fontWeight: sortField === '' ? 'bold' : 'normal' }}>Ingen</button>
                <br />
                <label>Ordning: </label>
                <button onClick={() => setSortOrder('asc')} style={{ fontWeight: sortOrder === 'asc' ? 'bold' : 'normal' }}>Stigande</button>
                <button onClick={() => setSortOrder('desc')} style={{ fontWeight: sortOrder === 'desc' ? 'bold' : 'normal' }}>Fallande</button>
            </div>
            <h1>Todos & Activity</h1>
            <p>Ärande</p>
            <button onClick={() => setShowModal(true)}>Skapa ny</button>


            {/* Filter panel*/}
            <div>
                <h3>Filter</h3>
                <div>
                    <label>Status:</label>
                    <select value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}>


                        <option value="all">Alla</option>
                        <option value="completed">Slutförda</option>
                        <option value="incomplete">Ej slutförda</option>
                    </select>
                </div>


                {/*Kategori*/}

                <div>
                    <label>Kategorier:</label>
                    <div>
                        <button onClick={handleShowAllCategories} >
                            Visa alla
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategorySelect(category)}
                            
                            >
                                {category}
                            </button>
                        ))}
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
                {getFilteredTodo().length === 0 ? (
                    <p>Inga ärenden än. Skapa ett nytt!</p>
                ) : (
                    getFilteredTodo().map(todo => (
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