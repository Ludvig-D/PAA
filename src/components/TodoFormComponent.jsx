import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoFormComponent = ({ onClose, todoToEdit }) => {
    const { addTodo, updateTodo} = useContext(TodoContext);

    const [formData, setFormData] = useState(todoToEdit ||
        
        {
        title: '',
        description: '',
        category: 'Övrigt',
        timeEstimate: 30,
        deadline: ''
    });

    const handleSubmit = () => {
        if (todoToEdit){
            updateTodo(todoToEdit.id, formData);
        } else {
                addTodo(formData);
        }
        onClose(); 
    };

    return (
        <div>
            <h2>{todoToEdit ? "Redigera ärande": "Skapa nyy ärande"}</h2>
            
            {/* Titel */}
            <div>
                <label>Titel:</label>
                <input 
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                />
            </div>

            {/* Beskrivning */}
            <div>
                <label>Beskrivning:</label>
                <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
            </div>

            {/* Kategori */}
            <div>
                <label>Kategori:</label>
                <select 
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
                    value={formData.timeEstimate}
                    onChange={(e) => setFormData({...formData, timeEstimate: parseInt(e.target.value)})}
                />
            </div>

            {/* Deadline */}
            <div>
                <label>Deadline:</label>
                <input 
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                    required
                />
            </div>

            {/* Knappar */}
            <button onClick={handleSubmit}>Spara</button>
            <button onClick={onClose}>Avbryt</button>
        </div>
    );
};

export default TodoFormComponent;