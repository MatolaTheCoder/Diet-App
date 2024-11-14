import React, { useEffect, useState } from 'react';
import Header from "./Header.jsx";
import Card from "../reutilizaveis/Card.jsx";

export default function Sugestoes() {

    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSuggestions = async () => {
            const token = localStorage.getItem('token');
            const storeduserid = localStorage.getItem('user_id');
            const id = Number(storeduserid);

            // Adicionar logs para verificar se o ID e o token estão sendo corretamente recuperados
            console.log("ID do usuário recuperado do localStorage:", id);
            console.log("Token do usuário:", token);

            if (!id || isNaN(id)) {
                setError("ID do usuário inválido");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/sugestoes/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Dados recebidos da API:", data); // Verifique a estrutura aqui
                    setSuggestions(data.sugestao); // Acessa o array `sugestao` no JSON retornado
                } else {
                    setError('Erro ao carregar sugestões');
                }
            } catch (err) {
                setError('Erro ao conectar ao servidor');
                console.error("Erro na requisição:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, []);

    if (loading) {
        return (
            <div>
                <div className="w-full fixed top-0 left-0">
                    <Header/>
                </div>

                <div style={loadingStyle}>
                    <div className="spinner"/>
                    <p>Carregando...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <div className="w-full fixed top-0 left-0">
                <Header />
                </div>

                <div className="mt-32">
                    <h1 className="text-3xl text-center">Sugestões</h1>
                </div>

                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                    <div className="text-center mt-10 text-red-500">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full fixed top-0 left-0">
                <Header />
            </div>

            <div className="mt-32">
                <h1 className="text-3xl text-center">Sugestões</h1>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="container mx-auto py-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {suggestions.map((meal, index) => (
                        <Card
                            key={index}
                            title={meal.nome}           // Usando `nome` ao invés de `title`
                            image={`../../public/img/refeicoes/${meal.nome}.jpg`}         // Usando `imagem` ao invés de `image`
                            description={meal.descricao} // Usando `descricao` ao invés de `description`
                            calories={meal.calorias}     // Usando `calorias`
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


// Estilos para o loading
const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};



// Estilos para o spinner (opcional)
const spinnerStyle = `
.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #09f;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
`;

// Adicionando estilo do spinner no documento
const styleElement = document.createElement('style');
styleElement.textContent = spinnerStyle;
document.head.appendChild(styleElement);document.head.appendChild(styleElement);

