// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import InicialHeader from '../reutilizaveis/InicialHeader';
import InputField from '../reutilizaveis/InputField';

export default function Update() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        conf_senha: '',
        idade: '',
        peso: '',
        altura: '',
        objectivos: '',
        restricoes: '',
        genero: ''
    });

    const objjectivos = [
        { id: 1, descricao: 'Perder peso' },
        { id: 2, descricao: 'Ganhar massa muscular' },
        { id: 3, descricao: 'Manter o peso' },
    ];

    const restricoes = [
        { id: 1, descricao: 'Nenhuma' },
        { id: 2, descricao: 'Intolerância à lactose' },
        { id: 3, descricao: 'Mariscos' },
    ];

    const gender = [
        { id: 1, gend: 'Homem' },
        { id: 2, gend: 'Mulher' }
    ]

    // Função para lidar com a mudança dos campos
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Send data to server
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.senha !== formData.conf_senha) {
            // eslint-disable-next-line no-undef
            Swal.fire({
                title: 'Um erro ocorreu!',
                text: 'Os campos senha e confirmação de senha não coincidem!',
                icon: 'Error',
                confirmButtonText: 'OK'
            });
            return;
        }


        try {
            const response = await fetch('http://localhost:8000/api/update/user/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // eslint-disable-next-line no-undef
                Swal.fire({
                    title: 'Success!',
                    text: 'Actualizado com Sucesso!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            } else {

                const errorData = await response.json();
                // eslint-disable-next-line no-undef
                Swal.fire({
                    title: 'Um erro ocorreu!',
                    text: `${errorData.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            // eslint-disable-next-line no-undef
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
        <div>
            <div className="shadow">
                <InicialHeader />
            </div>
            <div className="flex justify-center items-center w-full pt-5">
                <form onSubmit={handleSubmit}>

                    <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
                        {/* Informação Geral */}
                        <div className="p-8">
                            <h2 className="text-emerald-600 text-2xl font-semibold mb-6"> Actulizar Informação Geral</h2>
                            <InputField label={'Nome'} type={'text'} name={'nome'} onChange={handleChange} value={formData.nome} />
                            <InputField label={'Email'} type={'email'} name={'email'} onChange={handleChange} value={formData.email} />
                            <InputField label={'Senha'} type={'password'} name={'senha'} onChange={handleChange} value={formData.senha} />
                            <InputField label={'Confirmar Senha'} type={'password'} name={'conf_senha'} onChange={handleChange} value={formData.conf_senha} />
                        </div>

                        {/* Dados Section */}
                        <div className="bg-emerald-600/30 text-white p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                            <h2 className="text-2xl font-semibold mb-6">Actualizar Dados</h2>
                            <div className="w-full mb-3">
                                <label htmlFor={'genero'} className="block text-md text-gray-800">Sexo:</label>
                                <select
                                    name={'genero'}
                                    id={'genero'}
                                    className="w-64 bg-gray-100 border border-gray-200 text-gray-700 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
                                    onChange={handleChange}
                                    value={formData.genero} // Update this to formData.genero
                                    required
                                >
                                    <option value="">--- Selecione ---</option>
                                    {gender.map(option => (
                                        <option key={option.id} value={option.id}>
                                            {option.gend}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <InputField label={'Idade'} type={'number'} name={'idade'} onChange={handleChange}
                                value={formData.idade} />
                            <InputField label={'Peso'} type={'number'} name={'peso'} onChange={handleChange} value={formData.peso} />
                            <InputField label={'Altura'} type={'number'} name={'altura'} onChange={handleChange}
                                value={formData.altura} />

                            {/* Select for Objectivos */}
                            <div className="w-full mb-3">
                                <label htmlFor={'objectivos'} className="block text-md text-gray-800">Objetivos:</label>
                                <select
                                    name={'objectivos'}
                                    id={'objectivos'}
                                    className="w-64 bg-gray-100 border border-gray-200 text-gray-700 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
                                    onChange={handleChange}
                                    value={formData.objectivos}
                                    required
                                >
                                    <option value="">--- Selecione ---</option>
                                    {objjectivos.map(option => (
                                        <option key={option.id} value={option.descricao}>
                                            {option.descricao}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full mb-3">
                                <label htmlFor={'restricoes'} className="block text-md text-gray-800">Restrições:</label>
                                <select
                                    name={'restricoes'}
                                    id={'restricoes'}
                                    className="w-64 bg-gray-100 border text-gray-700 border-gray-200 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
                                    onChange={handleChange}
                                    value={formData.restricoes}
                                >
                                    <option value="">--- Selecione ---</option>
                                    {restricoes.map(option => (
                                        <option key={option.id} value={option.descricao}>
                                            {option.descricao}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mt-6">
                                <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200" type={"submit"}>
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}