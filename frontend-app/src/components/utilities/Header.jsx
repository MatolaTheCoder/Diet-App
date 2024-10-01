import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        const token = localStorage.getItem('token')

        if (!token) {
            console.error("Nenhum token encontrado")
            return
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
                localStorage.removeItem('token')
                localStorage.removeItem('user_id')

                window.location.href = '/login'
            } else {
                console.error("Erro ao realizar logout")
            }
        } catch (error) {
            console.error("Erro na requisição de logout:", error)
        }
    };
    const handleUpdate = async () => {
        try {
            const id = localStorage.getItem('user_id');

            const response = await fetch(`http://127.0.0.1:8000/api/update/${Number(id)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                window.location.href = '/update';
            }


            const data = await response.json(); // Correct way to extract data
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


    return (
        <header>
            <nav className="w-full bg-white shadow-sm">
                <div className="container mx-auto py-4 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center p-4">
                        <span className="font-nunito text-green-400">
                            <span className="text-xl font-medium">Diet</span>
                            -<span className="text-gray-400 text-lg">App</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div>


                        <div>
                            <div>
                                <ul className="hidden md:flex pr-6 gap-8 font-semibold text-sm text-gray-600 underline">
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
                                        {/* Dropdown Menu */}
                                        <ul
                                            className={`absolute ${dropdownOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-md mt-2 w-40 text-sm text-gray-600 font-normal`}
                                            aria-label="User dropdown menu"
                                        >
                                            <li className="p-2 hover:bg-gray-100 transition-colors duration-200">
                                                <button onClick={handleLogout}>Logout</button>
                                            </li>
                                            <li className="p-2 hover:bg-gray-100 transition-colors duration-200">
                                                <button onClick={handleUpdate}> Update</button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
        ;
}
