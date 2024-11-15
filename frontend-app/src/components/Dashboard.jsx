import React, { useEffect, useState } from 'react';
import Header from "./utilities/Header.jsx";
import TipoRefeicao from './reutilizaveis/TipoRefeicao.jsx';
import Card from './reutilizaveis/Card.jsx';

export default function Dashboard() {
    const [planoAlimentar, setPlanoAlimentar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [numeroRefeicoes, setNumeroRefeicoes] = useState(0);

    useEffect(() => {
        const storedNumeroRefeicoes = localStorage.getItem('numeroRefeicoes');
        console.log("Refeicoes:", localStorage.getItem('numeroRefeicoes'));
        const fetchSuggestions = async () => {
            const token = localStorage.getItem('token');
            const storeduserid = localStorage.getItem('user_id');
            const id = Number(storeduserid);

            console.log("ID do usuário recuperado do localStorage:", id);
            console.log("Token do usuário:", token);

            if (storedNumeroRefeicoes) {
                setNumeroRefeicoes(storedNumeroRefeicoes);
            }

            if (!id || isNaN(id)) {
                setError("ID do usuário inválido");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/planoAlimentar/${id}/${localStorage.getItem('numeroRefeicoes')}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("Dados recebidos da API:", data);
                    setPlanoAlimentar(data.planoAlimentar);
                } else {
                    Swal.fire({
                        title: 'Erro ao carregar sugestões',
                        text:  'Não foi possível sugerir refeições.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            } catch (err) {
                setError('Erro ao conectar ao servidor');
                console.error("Erro na requisição:", err);
                Swal.fire({
                    title: 'Erro ao carregar sugestões',
                    text: 'Não foi possível sugerir refeições.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, []);

    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
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

            .refeicao-title {
                font-size: 1.5rem;
                font-weight: bold;
                color: #27ae60;
                text-align: center;
                margin: 1rem 0;
            }
        `;
        document.head.appendChild(styleElement);

        // Clean up style element when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <div>
            <div className="shadow">
                <Header />
            </div>
            <div>
                {loading ? (
                    <div style={loadingStyle}>
                        <div className="spinner"></div>
                        <p>Carregando...</p>
                    </div>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    Object.entries(planoAlimentar).map(([refeicao, items]) => (
                        <div key={refeicao} className="container mx-auto my-8 px-4">
                            <TipoRefeicao title={refeicao}></TipoRefeicao>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {items[0].map((item) => (
                                    <Card
                                        key={item.id}
                                        title={item.nome}
                                        image={`../../public/img/refeicoes/${item.nome}.jpg`}
                                        description={item.descricao}
                                        calories={item.calorias}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};
