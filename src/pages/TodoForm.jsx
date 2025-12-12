import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
    const navigate = useNavigate();
    const {addTodo}= useContext(TodoContext);

    // State för formuläret
    const [formData, setFormData] = useState({
        // id??
        title: '',
        description: '',
        category: 'Övrigt',
        timeEstimate: 30,
        deadline: ''
    });

    const handleSubmit = () => {
  
        addTodo(formData);
        navigate('/todos');
    };

    const handleCancel = () => {
        navigate('/'); // Tillbaka till home
    };

    return (
        <div>
            <h2>Skapa nytt ärende</h2>
            <div>
                
                {/* Titel */}
                <div>
                    <label>Titel:</label>
                    <input 
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />
                </div>

                {/* Beskrivning */}
                <div>
                    <label>Beskrivning:</label>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </div>

                {/* Kategori */}
                <div>
                    <label>Kategori:</label>
                    <select 
                        name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        <option value="Hälsa">Hälsa</option>
                        <option value="Hushåll">Hushåll</option>
                        <option value="Jobbrelaterat">Jobbrelaterat</option>
                        <option value="Nöje">Nöje</option>
                        <option value="Övrigt">Övrigt</option>
                    </select>
                </div>

                {/* Tidsestimat */}
                <div>
                    <label>Tidsestimat (minuter):</label>
                    <input 
                        type="number"
                        name="timeEstimate"
                        value={formData.timeEstimate}
                        onChange={(e) => setFormData({...formData, timeEstimate: e.target.value})}
                    />
                </div>

                {/* Deadline */}
                <div>
                    <label>Deadline:</label>
                    <input 
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                        required
                    />
                </div>

                {/* Knappar */}
                <button onClick={handleSubmit}>Spara</button>
                <button onClick={handleCancel}>Avbryt</button>
            </div>
        </div>
    );
};

export default TodoForm;