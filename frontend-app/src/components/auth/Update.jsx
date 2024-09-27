import React from 'react'
import InputField from '../reutilizaveis/InputField'

export default function Update() {
    const objjectivos = [
        { id: 1, descricao: 'Perder peso' },
        { id: 2, descricao: 'Ganhar massa muscular' },
        { id: 3, descricao: 'Manter o peso' },
    ]

    const restricoes = [
        { id: 1, descricao: 'Nenhuma' },
        { id: 2, descricao: 'Intolerância à lactose' },
        { id: 3, descricao: 'Mariscos' },
    ]
    return (
        <div>
            <div className="">
                <nav className="w-full bg-white shadow">
                    <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">
                        <div className="flex flex-col items-center py-4">
                            <span className="font-nunito text-green-400">
                                <span className='text-xl font-medium'>Diet</span>-<span className='text-gray-400 text-lg'>App</span>
                            </span>
                        </div>
                        <div>
                            <p className="text-emerald-500 ">Bem-Vindo</p>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="bg-neutral-50 w-full min-h-full">
                <div className="px-6 pt-4 max-w-7xl mx-auto mt-3">
                    <p className="text-gray-600 font-semibold text-2xl">
                        | Actualizar dados
                    </p>
                </div>
                <div className="max-w-5xl mx-auto p-5">
                    <form action="">

                        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8">
                                <h2 className="text-emerald-600 text-2xl font-semibold mb-6">Actualizar informacao geral</h2>
                                <InputField label={'Nome'} name={'nome'} onChange={''} />
                                <InputField label={'Email'} name={'email'} onChange={''} />
                                <InputField label={'Senha'} name={'senha'} onChange={''} />
                                <InputField label={'Confirmar Senha'} name={'conf_senha'} onChange={''} />
                            </div>
                            <div className="bg-emerald-600/30 text-white p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                                <h2 className="text-2xl font-semibold mb-6">Actualizar dados</h2>
                                <InputField label={'Idade'} name={'idade'} onChange={''} />
                                <InputField label={'Peso'} name={'peso'} onChange={''} />
                                <InputField label={'Altura'} name={'altura'} onChange={''} />
                                <div className="w-full mb-3">
                                    <label htmlFor={'objectivos'} className="block text-md text-gray-800">Objetivos:</label>
                                    <select
                                        name={'objectivos'}
                                        id={'objectivos'}
                                        className="w-64 bg-gray-100 border border-gray-200 text-gray-700 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
                                    >
                                        <option value="">--- Selecione ---</option>
                                        {objjectivos.map(option => (
                                            <option key={option.id} value={option.id}>
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
                                    >
                                        <option value="">--- Selecione ---</option>
                                        {restricoes.map(option => (
                                            <option key={option.id} value={option.id}>
                                                {option.descricao}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <button type='submit' className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
                                        Actualizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
