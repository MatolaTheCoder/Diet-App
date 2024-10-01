import React, { useEffect, useState } from 'react';
import Header from "./Header.jsx";


export default function Informacoes() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            const storedUserId = localStorage.getItem('user_id');
            const id = Number(storedUserId);

            if (!id || isNaN(id)) {
                setError("ID do usuário inválido");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/informacoes/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Dados do usuário recebidos da API:", data);
                    setUserInfo(data); // Armazena os dados do usuário
                } else {
                    setError('Erro ao carregar informações do usuário');
                }
            } catch (err) {
                setError('Erro ao conectar ao servidor');
                console.error("Erro na requisição:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []); // Executa uma vez ao carregar o componente

    // Exibe uma mensagem de carregamento
    if (loading) {
        return (
            <div>
                <Header/>
                <div style={loadingStyle}>
                    <div className="spinner"/>
                    <p>Carregando...</p>
                </div>
            </div>
        );
    }

    // Exibe uma mensagem de erro caso ocorra algum erro
    if (error) {
        return (
            <div>
                <Header />
                <div className="mt-32">
                    <h1 className="text-3xl text-center text-red-500">{error}</h1>
                </div>
            </div>
        );
    }

    // Exibe as informações do usuário após o carregamento
    return (
        <div>
            <Header />
            <div className="mt-32">
                <h1 className="text-3xl text-center">Informações do Usuário</h1>
            </div>
            <div className="container mx-auto py-6">
                {userInfo ? (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {/* Card para Nome */}
                        <div style={cardStyle}>
                            <p><strong>Nome: </strong> {userInfo.name}</p>
                            <p><strong>Email: </strong> {userInfo.email}</p>
                            <p><strong>Idade: </strong> {userInfo.idade} anos</p>
                            <p><strong>Sexo: </strong> {userInfo.sexo}</p>
                            <p><strong>Peso: </strong> {userInfo.peso} kg</p>
                            <p><strong>Altura: </strong> {userInfo.altura} cm</p>
                            <p><strong>objetivo: </strong> {userInfo.objetivo}</p>
                            <p><strong>Restrições alimentares: </strong> {userInfo.restricoes}</p>
                            <p><strong>Necessidades calóricas: </strong> {userInfo.necessidade_calorica} kcal/dia</p>

                        </div>

                    </div>
                ) : (
                    <p>Informações não disponíveis</p>
                )}
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

// Estilos para os cards
const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
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