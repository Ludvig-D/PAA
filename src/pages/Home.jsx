import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGoToTodos = () => {
        navigate('/todos');
    };

    return(
        <div>
            <h1>Välkommen!</h1>
            <p>Här är olika funktionerna att välja ifrån</p>
            <button onClick={handleGoToTodos}>Gå till Todos & Activity</button>
        </div>
    )
}

export default Home;