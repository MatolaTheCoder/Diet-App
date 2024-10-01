import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('token');

        try {

            const response = await fetch('http://127.0.0.1:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Logout bem-sucedido na API');
            } else {
                console.error('Erro ao fazer logout na API');
            }
        } catch (error) {
            console.error('Erro ao conectar ao servidor:', error);
        } finally {

            localStorage.removeItem('token');
            localStorage.removeItem('user_id');

            navigate('/login');
        }
    };

    return (


        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Logout
        </button>
    );
}
