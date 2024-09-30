// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import InputField from '../reutilizaveis/InputField';
import InicialHeader from '../reutilizaveis/InicialHeader';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    // Função para lidar com a mudança dos campos
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Função para enviar os dados para o servidor
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Requisição de login
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    senha: formData.senha,
                }),
            });

            if (response.ok) {
                const loginData = await response.json();

                // Exibe uma mensagem de sucesso usando Swal
                // eslint-disable-next-line no-undef
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    text: 'Seja bem vindo!',
                    confirmButtonText: 'OK',
                });

                // Armazena o token no localStorage
                localStorage.setItem('token', loginData.access_token);

                // Redireciona para a dashboard
                window.location.href = '/dashboard';
            } else {
                // Exibe uma mensagem de erro no login
                const errorData = await response.json();
                // eslint-disable-next-line no-undef
                Swal.fire({
                    title: 'Erro no Login',
                    text: errorData.message || 'Não foi possível fazer o login.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            // Exibe uma mensagem de erro caso haja um problema com o servidor
            // eslint-disable-next-line no-undef
            Swal.fire({
                title: 'Um erro ocorreu!',
                text: 'Erro no servidor. Tente novamente mais tarde.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            console.error(error);
        }
    };

    return (
        <div>
            <div className="shadow">
                <InicialHeader />
            </div>
            <div className="flex justify-center items-center w-full h-full">
                <div className="mt-12 p-8 shadow shadow-emerald-50 rounded-tr-lg bg-white rounded-md">
                    <div className="my-5 flex justify-center">
                        <div className="text-emerald-500 text-xl font-medium">Login</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <InputField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Senha"
                                name="senha"
                                type="password"
                                value={formData.senha}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="w-full mt-1.5">
              <span className="text-blue-500 text-sm text-right">
                Clique aqui para recuperar a senha
              </span>
                        </p>
                        <div className="flex justify-center mt-4 w-full">
                            <button
                                className="p-1.5 w-4/5 bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-200"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
