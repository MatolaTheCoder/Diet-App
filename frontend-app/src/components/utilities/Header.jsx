import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoRestaurant } from 'react-icons/io5';
import { MdFastfood } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [numeroRefeicoes, setNumeroRefeicoes] = useState();
    const navigate = useNavigate();

    // Exemplo de dados de tarefas
    const refeicao = [
        {
            id: 1,
            icon: <IoRestaurant />,
            title: 'Pequeeno almoco',
            category: 'Categoria 1',
            calorias: '120',
        },
        {
            id: 2,
            icon: <IoRestaurant />,
            title: 'Tarefa 2',
            category: 'Categoria 2',
            calorias: '90',
        },
        // Adicione mais tarefas conforme necessário
    ];


    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Nenhum token encontrado");
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                window.location.href = '/login';
            } else {
                console.error("Erro ao realizar logout");
            }
        } catch (error) {
            console.error("Erro na requisição de logout:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            const id = localStorage.getItem('user_id');
            const response = await fetch(`http://127.0.0.1:8000/api/update/${Number(id)}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                window.location.href = '/update';
            }
            const data = await response.json();
            localStorage.setItem('dados', JSON.stringify(data));
        } catch (error) {
            Swal.fire({
                title: 'Um erro ocorreu!',
                text: `Erro:${error}`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        }
    };

    const handleSearch = async () => {
        try {
            const id = localStorage.getItem('user_id');
            const token = localStorage.getItem('token');
            const response = await fetch(`http://127.0.0.1:8000/api/planoAlimentar/${Number(id)}/${numeroRefeicoes}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                // Salvar o número de refeições no localStorage (ou state)
                localStorage.setItem('numeroRefeicoes', numeroRefeicoes);

                // Redirecionar para a próxima página e passar o valor
                navigate('/refeicoes-do-dia', { state: { data, numeroRefeicoes } });
                window.location.reload(); 
            }
        } catch (error) {
            Swal.fire({
                title: 'Um erro ocorreu!',
                text: `Erro:${error}`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        }
    };

    return (
        <header>
            <nav className="w-full bg-white shadow-sm">
                <div className="container mx-auto py-4 flex items-center justify-between">
                    <div className="flex items-center p-4">
                        <span className="font-nunito text-green-400">
                            <span className="text-xl font-medium">Diet</span>
                            -<span className="text-gray-400 text-lg">App</span>
                        </span>
                    </div>
                    <div>
                        <ul className="hidden md:flex pr-6 gap-8 font-semibold text-sm text-gray-600 underline">
                            <li className='relative mx-2'>
                                <div className="w-full max-w-3xl mx-auto bg-gray-100  rounded-lg shadow-md">
                                    <div className="relative mb-4">
                                        <HiOutlineSearch
                                            className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Número de refeições..."
                                            value={numeroRefeicoes}
                                            onChange={(e) => setNumeroRefeicoes(e.target.value)} // Atualiza o estado
                                            className="border border-gray-300 rounded-md h-10 w-full pl-10 pr-4 focus:outline-none focus:border-gray-200 text-sm"
                                        // onClick={() => setSearchOpen(!searchOpen)}
                                        />
                                    </div>
                                    {searchOpen && (
                                        <div className="bg-white rounded-lg overflow-hidden absolute">
                                            {refeicao.map((ref) => (
                                                <div key={ref.id} className="flex items-center w-72 justify-between p-4 border-b last:border-b-0">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="text-2xl">{ref.icon}</div>
                                                        <div>
                                                            <h3 className="font-semibold text-gray-800">{ref.title}</h3>
                                                            <p className="text-sm text-gray-500">{ref.category} • calorias: {ref.calorias} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </li>
                            <li>
                                <button
                                    className="p-1.5 w-4/5 bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-200"
                                    onClick={handleSearch}
                                >
                                    Pesquisar
                                </button>
                            </li>
                            <li className="hover:text-gray-800 transition-colors duration-200">
                                <Link to="/informacoes">Informações</Link>
                            </li>
                            <li className="hover:text-gray-800 transition-colors duration-200">
                                <Link to="/sugestoes">Sugestões</Link>
                            </li>
                            <li className="relative group hover:text-gray-800 transition-colors duration-200">
                                <button
                                    className="flex items-center space-x-2"
                                    aria-haspopup="true"
                                    aria-expanded={dropdownOpen}
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <i className="fas fa-user"></i>
                                    <span>Usuário</span>
                                </button>
                                <ul
                                    className={`absolute ${dropdownOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-md mt-2 w-40 text-sm text-gray-600 font-normal`}
                                    aria-label="User dropdown menu"
                                >
                                    <li className="p-2 hover:bg-gray-100 transition-colors duration-200">
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                    <li className="p-2 hover:bg-gray-100 transition-colors duration-200">
                                        <button onClick={handleUpdate}>Update</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
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
document.head.appendChild(styleElement); document.head.appendChild(styleElement);