import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
                                <ul className="hidden md:flex gap-8 font-semibold text-sm text-gray-600 underline">
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
                                                <Link to="/logout">Logout</Link>
                                            </li>
                                            <li className="p-2 hover:bg-gray-100 transition-colors duration-200">
                                                <Link to="/update">Update</Link>
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
